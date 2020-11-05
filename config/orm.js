// Import MySQL connection.
let connection = require("../config/connection.js");

// Helper function for SQL syntax.

function printQuestionMarks(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  const arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

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
      const queryString = `INSERT INTO ${table} (${col.toString()}) VALUES (${val.toString()});`;
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
