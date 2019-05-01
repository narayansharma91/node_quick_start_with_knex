const { before, after } = require('mocha');
const { Model } = require('objection');
const express = require('express');
const { urlencoded, json } = require('body-parser');
const { registerAllRepos } = require('./../../app/repo/index');
const { registerAllServices } = require('./../../app/services/index');
const { registerAutoLoad } = require('./../../app/util/autoload');
const { registerModels } = require('./../../app/models/index');

process.env.NODE_ENV = 'testing';

const configuration = require('./../../knexfile')[process.env.NODE_ENV];
// eslint-disable-next-line import/order
const knex = require('knex')(configuration);

const models = registerModels();
Model.knex(knex);

before(async () => {
  await knex.migrate.latest();
});
after(async () => {
  await knex.migrate.rollback();
});

const startApplication = async () => {
  const app = express();
  app.use(urlencoded({ extended: false }));
  app.use(json());
  const repos = await registerAllRepos({ models });
  const services = {
    ...(await registerAllServices({ repos })),
    registerAutoLoad: await registerAutoLoad(),
  };
  return services;
};

module.exports = {
  services: new Promise((resolve) => {
    resolve(startApplication());
  }),
  knex,
};
