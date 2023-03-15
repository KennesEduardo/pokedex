//configurando o mysql 
const mysql = require('serverless-mysql')({
    config: {
      host     : "localhost",
      database : "trabalho",
      user     : "root",
      password : ""
    }
});
module.exports = mysql;