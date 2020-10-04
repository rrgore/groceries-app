var express = require('express');
var Model = require('../models/model');
var { testEnvironmentVariable, _ } = require('../settings');
var indexRouter = express.Router();
var cors = require('cors');

var groceriesModel = new Model('groceries_table');

async function getAllGroceries( req, res ) {
    try {
        var data = await groceriesModel.selectAll();
        return res.status(200).json({ groceries: data.rows });
    } catch( err ) {
        return res.status(200).json({ errors: err.stack });
    }
}

async function patchItem( req, res ) {
    try {
        var newProps = {
            id: req.params.id,
            quantity: req.body.quantity
        };
        await groceriesModel.updateItem( newProps );
        return res.status(200).json({ msg: "Success" });
    } catch( err ) {
        res.status(200).json({ errors: err.stack });
    }
}

indexRouter.patch('/groceries/:id', cors(), patchItem );

indexRouter.get('/groceries', cors(), getAllGroceries);

indexRouter.get('/', function(req, res) {
    return res.status(200).json({ message: testEnvironmentVariable });
});

module.exports = indexRouter;