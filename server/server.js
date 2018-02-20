'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const os = require('os');
const config = require('./config/config');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const cors = require("cors");
const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGO_URI, { useMongoClient: true });

app.set('case sensitive routing', true);
app.set('env', config.NODE_ENV);
app.set('port', config.PORT);

let spec = fs.readFileSync(path.join(__dirname, 'apidocs/swagger.yaml'), 'utf8');
let swaggerDoc = jsyaml.safeLoad(spec);

// For Swagger on Heroku
if (app.get('env') === 'production') {
  swaggerDoc.host = 'expressapp-api.herokuapp.com';  
}
else{
  swaggerDoc.host = `${os.hostname()}:${config.PORT}`;
}

swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  app.use(middleware.swaggerUi());
});

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

// importing all modules
app.use('/api',
  require('./modules/user/router'),
  require('./modules/post/router')
);

app.use(function (err, req, res, next) {
  return res.status(500).send({ success: false, msg: 'Internal Server Error', data: err.stack });
});


app.listen(app.get('port'), function () {
  console.log(`Server is listening on http://${os.hostname()}:${app.get('port')}`);
});

module.exports = app;