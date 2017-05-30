'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const auth = require('../middlewares/auth')
const userCtrl= require('../controllers/user')

const api = express.Router()
//Bearer
/*
{"authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OTJjZmE0ZDBkNzkxZDA4Yzg3N2Q1NjgiLCJleHAiOjE0OTczMjk0ODV9.y4W391oAonuwz1tchCzEcjdJwgntKeNnPtTFQyYC6_Y"}
*/

api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product',auth, productCtrl.saveProduct)
api.put('/product/:productId',auth, productCtrl.updateProduct)
api.delete('/product/:productId',auth, productCtrl.deleteProduct)

api.post('/signup',userCtrl.signUp)
api.post('/signin',userCtrl.signIn)

api.get('/private',auth,(req,res)=>{

res.status(200).send({message: 'tienen acceso'})

})

module.exports= api