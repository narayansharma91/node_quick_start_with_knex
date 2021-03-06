### Included features
- Well structure of the files for a large project.
- Configured database connection.
- Exception Handling
- Implemented powerful query builder **knex**
- Implemented **objection.js** a powerful **ORM** package for knex.
- Unit Test
- Validation
- Linter (eslint, prettier) for code guideline and increase the readability of the code.

<hr />


### Application File/Directory Structure
<img src="https://github.com/narayansharma91/repo_images/blob/master/node_quick_start_with_knex/node_quick_start_with_knex_file_structure.jpg" width="100%" height="350" />

<hr />

### Application layer Architecture
![alt text](https://github.com/narayansharma91/repo_images/blob/master/node_quick_start_with_knex/node_quick_start_with_knex_application_layer.jpg)

<hr />

### Quick setup

* Download and install npm from offical website if you don't have already (https://nodejs.org/en/) 
* Clone this project using below command.
```
git clone https://github.com/narayansharma91/node_quick_start_with_knex.git
```
* Goto your project directory by command line.
```
cd node_quick_start_with_knex
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
npm start
```

<hr />

 ### Official website/url for different packages.
 - Validation (express-validator) : https://express-validator.github.io/docs/
 - Query Builder (knex) : https://knexjs.org/
 - ORM (objection) : https://vincit.github.io/objection.js/


```



