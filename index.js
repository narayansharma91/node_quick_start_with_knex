const express = require('express');
const bodyParser = require('body-parser');
const { Model } = require('objection');
const { port, environment } = require('./app/config');
const { registerAllRepos } = require('./app/repo/index');
const { registerAllServices } = require('./app/services/index');
const { bootstrapApplication } = require('./app/app');
const { registerAutoLoad } = require('./app/util/autoload');
const { registerModels } = require('./app/models/index');
const configuration = require('./knexfile')[environment];
// eslint-disable-next-line import/order
const knex = require('knex')(configuration);

const models = registerModels();
Model.knex(knex);
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const repos = registerAllRepos({ models });
const services = {
  ...registerAllServices({ repos }),
  registerAutoLoad: registerAutoLoad(),
};
bootstrapApplication({ services, app });
/*  eslint-disable-next-line no-console */
console.log(`application start at ${port}`);
app.listen(port);
