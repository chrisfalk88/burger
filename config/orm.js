// Import MySQL connection.
let connection = require("../config/connection.js");

// Helper function for SQL syntax.

const orm = {
  //selectAll()
  selectAll: function (tableName, cb) {
    const queryString = `SELECT * FROM ${tableName};`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  //insertOne() create
  insertOne: function (table, col, val, cb) {
      const queryString = `INSERT INTO ${table} (${col.toString()}) VALUES ("${val.toString()}");`;
      connection.query(queryString, function (err, result){
        if (err) throw err;
        cb(result);
      });
    },
  //updateOne()
  updateOne: function(table, col, val, id, cb){
      //is the condition here to change its name or its devoured state? 
      const queryString = `UPDATE ${table} SET ${col} = ${val} WHERE id = ${id};`;
      connection.query(queryString, function(err, result){
          if (err) throw err;
          cb(result);
      })
  }
};

module.exports = orm;
