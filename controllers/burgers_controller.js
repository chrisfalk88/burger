const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        const hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
        res.render("index",hbsObject);
    });
});

//might need a little help on this one 
router.post("/api/burgers", function(req, res){
    // req.body.burgerName will come from the form data in our handlebars 
    burger.create("burger_name", req.body.name, function(data){

    res.json("Success");
    })
});

router.put("/api/burgers/:id", function(req,res){
    const id = req.params.id;

    burger.update("devoured", 1, id, function(data){
        res.status(200).end();
    })
});


module.exports = router;