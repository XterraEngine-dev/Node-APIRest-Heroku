'use strict'

const services = require('../services')

function isAuth (req,res,next){
  if(!req.headers.authorization){
      return res.status(403).send({message: 'no tienes autorizacion'})
  }

  const token = req.headers.authorization.split(' ')[1]

    services.decodeToken(token)
    .then(Response =>{
        req.user= response 
        next()
    })
    .catch(response=>{
        res.status(reponse.status)
    })
}

module.exports = isAuth