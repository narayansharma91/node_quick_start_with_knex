### Included features
- Well structure of the file for a large project.
- Configured database connection.
- Exception Handling
- Implemented powerful query builder **knex**
- Implemented **objection.js** a pwerful **ORM** package for knex.
- Unit Test
- Validation
- Linter (eslint, prettier) for code guideline and increase the readability of the code.

### Quick setup

* Download and install npm from offical website if you don't have already (https://nodejs.org/en/) 
* Clone this project using below command.
```
git clone https://github.com/narayansharma91/node_quick_start_knex.git
```
* Goto your project directory by command line.
```
cd /node_quick_start_knex
```
* Install dependency of project using given below command
```
npm install
``` 
* Once dependency downloaded, 

```
copy manually .env.example and rename with .env name
```
* Configure your configuration based on your requirements on .env file(eg. port, database name, environment etc)

* Install postgres/mysql database if you don't have already.

* Migrate database schema (existing) using below command.
```
knex migrate:latest
```

* Start project using below command.
```
nodemon index.js
```
### Directory/File Structure
- **index.js:** The index.js file is the entry point of the application where all the services, packages are registered to bootstrap your application.
- **app :** The app directory holds all application source code eg. services, repo etc.
  
  - **http :** The http directory contains two sub directory for store validation rules and register application routes.
    - **request :** The request directory containts all validation rules for your application.
    
    - **routes :** The routes directory contains all the application routes.
    
   - **repo :** The repo directory holds all the files which is associated with sql query. For every model it should be one    repo file.
   
  - **knex :** This directory contains migrations and seeder of your application.
    
  - **services :** The services directory holds all the application services. All the business logic should write in service file. Its same as controller in MVC design pattern.
  
  - **util :** The util directory holds helper files which can be reusable all over the application. 
  
 - **app.js :** The app.js file is responsible for register all the routes.
 
 - **config.js :** The config.js file is responsible for provide application level configuration based on environment. 
 
 ### Official website/url for different packages.
 - Validation (express-validator) : https://express-validator.github.io/docs/
 - Query Builder (knex) : https://knexjs.org/
 - ORM (objection) : https://vincit.github.io/objection.js/


```



