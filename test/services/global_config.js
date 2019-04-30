const { before, after } = require('mocha');
const express = require('express');
const { urlencoded, json } = require('body-parser');
const { exec } = require('child_process');
const { registerAllRepos } = require('./../../app/repo/index');
const { registerAllServices } = require('./../../app/services/index');
const { registerAutoLoad } = require('./../../app/util/autoload');

process.env.NODE_ENV = 'testing';

const configuration = require('./../../knexfile')[process.env.NODE_ENV];
const knex = require('knex')(configuration); // eslint-disable-line import/order

before(async (done) => {
  const migrate = exec('knex migrate:latest');
  migrate.stdout.pipe(process.stdout);
  migrate.stderr.pipe(process.stderr);
  done();
});
after(async (done) => {
  const migrate = exec('knex migrate:rollback');
  migrate.stdout.pipe(process.stdout);
  migrate.stderr.pipe(process.stderr);
  const migrate1 = exec('knex migrate:latest');
  migrate1.stdout.pipe(process.stdout);
  migrate1.stderr.pipe(process.stderr);

  done();
});

const startApplication = async () => {
  const app = express();
  app.use(urlencoded({ extended: false }));
  app.use(json());
  const repos = await registerAllRepos({ knex });
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
