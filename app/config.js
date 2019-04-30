require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';
const config = {
  development: {
    port: 4000,
    environment,
  },
  production: {
    port: process.env.PORT || 4000,
    environment,
  },
  test: {
    port: 5000,
    environment,
  },
};
module.exports = config[environment];
