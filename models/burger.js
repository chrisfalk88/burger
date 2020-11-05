const orm = require("../config/orm.js");

const burger = {

    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },


    create: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res){
            cb(res);
        })
    },
    //still not sure if this function is quite what we want 
    update: function(col, val, id, cb) {
        orm.updateOne("burgers", col, val, id, function(res){
            cb(res);
        })
    }





}

module.exports = burger;
