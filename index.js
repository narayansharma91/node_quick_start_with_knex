const express = require("express");
const bodyParser = require("body-parser");
const { port, environment } = require("./app/config");
const { registerAllRepos } = require("./app/repo/index");
const { registerAllServices } = require("./app/services/index");
const { bootstrapApplication } = require("./app/app");
const { registerAutoLoad } = require("./app/util/autoload");
const configuration = require("./knexfile")[environment];
const knex = require("knex")(configuration); // eslint-disable-line import/order

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const repos = registerAllRepos({ knex });
const services = {
  ...registerAllServices({ repos }),
  registerAutoLoad: registerAutoLoad()
};
bootstrapApplication({ services, app });
/*  eslint-disable-next-line no-console */
console.log(`application start at ${port}`);
app.listen(port);
