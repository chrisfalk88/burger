const orm = require("../config/orm.js");

const burger = {

    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },

    create: function(burger_name, isDevoured, cb) {
        orm.insertOne("burgers", burger_name, isDevoured, function(res){
            cb(res);
        })
    },
    //still not sure if this function is quite what we want 
    update: function(isDevoured, id, cb) {
        orm.updateOne("burgers", isDevoured, id, function(res){
            cb(res);
        })
    }





}

module.exports = burger;