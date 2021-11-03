const db = require('../database/models')

module.exports= {
    getAll : (req, res) => {
        db.Products.findAll()
        .then(product => {
            if (product) {
                res.status(200).json({
                    status:200,
                    products : product,
                })
            } else {
                res.status(400).json({
                    status: 400,
                    message : "Products not found"
                })
            }
        })
    },
    getOne : (req, res) => {
        db.Products.findOne({
            where : {
                id : req.params.id
            }
        })
        .then(product => {
            if (product) {
                res.status(200).json({
                    status : 200,
                    product : product
                })
            } else {
                res.status(400).json({
                    status : 400,
                    message : "Product ID not found"
                })
            }
        })
    },
    create : (req, res) => {
        const {name, sku, price, description, category, image} = req.body
        db.Products.create({
            name,
            sku,
            price,
            description,
            category,
            image,
        })
        .then(resdb => {
            if (resdb) {
                res.status(200).json({
                    status : 200,
                    message : "Product added succesfully",
                    product : resdb
                })
            } else {
                res.status(400).json({
                    status : 400,
                    message : "Something fail, try again later",
                })
            }
        })
    },
    remove : (req, res) => {
        db.Products.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(resdb => {
            if(resdb){
                res.status(200).json({
                    status : 200,
                    message : "The product was deleted succesfully"
                })
            } else {
                res.status(400).json({
                    status : 400,
                    message : "Product not found"
                })
            }
        })
    }
}