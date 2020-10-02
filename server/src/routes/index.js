var express = require('express');
var Model = require('../models/model');
var { testEnvironmentVariable, _ } = require('../settings');
var indexRouter = express.Router();

var groceriesModel = new Model('groceries_table');
async function getAllGroceries( req, res ) {
    try {
        var data = await groceriesModel.selectAll();
        return res.status(200).json({ groceries: data.rows });
    } catch( err ) {
        res.status(200).json({ errors: err.stack });
    }
}

indexRouter.get('/allGroceries', getAllGroceries);

indexRouter.get('/', function(req, res) {
    return res.status(200).json({ message: testEnvironmentVariable });
});

module.exports = indexRouter;