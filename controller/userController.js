const db = require('../database/models');
const bcrypt = require('bcrypt')

module.exports = {
    getAll : (req, res) => {
        db.Users.findAll()
        .then(resdb => {
            if (resdb) {
                return res.status(200).json({
                    status: 200,
                    users : resdb
                })
            } else {
                return res.status(400).json({
                    status: 400,
                    message : "Not user found"
                })
            }
        })
    },
    getOne : (req, res) => {
        db.Users.findOne({
            where : {
                id : req.params.id
            }
        })
        .then(resdb => {
            if (resdb) {
                return res.status(200).json({
                    status: 200,
                    users : resdb
                })
            } else {
                return res.status(400).json({
                    status: 400,
                    message : "Not user found"
                })
            }
        })
    },
    create : (req, res) => {
        const {email, password} = req.body
        db.Users.create({
            email,
            password : bcrypt.hashSync(password, 10),
        })
        .then(resdb => {
            if (resdb) {
                return res.status(200).json({
                    status : 200,
                    message : "The user was created succesfully",
                    user : resdb.email
                })
            } else {
                return res.status(400).json({
                    status : 400,
                    message : "Something fail, try again later",
                })
            }
            
        })
        .catch(error => {
            res.json(error)
        });
    }, 
    edit : (req, res) => {
        db.Users.update({
            where : {
                id : req.params.id
            }
        })
        .then(resdb => {
            if (resdb) {
                return res.status(200).json({
                    status : 200,
                    message : "The user was edited"
                })
            } else {
                return res.status(400).json({
                    status: 400,
                    message : "User not found"
                })
            }
        })
    },
    remove : (req, res) => {
        db.User.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(resdb => {
            if (resdb) {
                return res.status(200).json({
                    status : 200,
                    message : "The user was edited succesfully",
                    user : resdb,
                })
            } else {
                return res.status(400).json({
                    status : 400,
                    message : "User not found"
                })
            }
        })
    }
}