'use strict'
var mysql = require("mysql");

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')


//Conexion
/*
var conexion = mysql.createConnection({
  host: "192.168.0.84",
  user: "pasantia",
  password: "pasantia",
  database: "DBPropemar"
}) */
var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "pasantias"
})

conexion.connect(function(err){
  if (err) throw err;
  console.log("Base de datos conectada");
})

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'mysql'),

  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  */
 
  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', '3306'),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', '1234'),
      database: Env.get('DB_DATABASE', 'pasantias') 
    },
    debug: Env.get('DB_DEBUG', false)
  },

  /*
  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', '192.168.0.84'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'pasantia'),
      password: Env.get('DB_PASSWORD', 'pasantia'),
      database: Env.get('DB_DATABASE', 'DBPropemar')
    },
    debug: Env.get('DB_DEBUG', false)
  }, */

  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  |
  */
  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonis')
    },
    debug: Env.get('DB_DEBUG', false)
  }
}
