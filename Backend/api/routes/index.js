const express= require('express')
const cors = require('cors')
const pessoas = require ('./pessoasRouter')
const animais = require('./animaisRouter')



module.exports = app => {
    app.use(cors())
    app.use(
        express.json(),
        animais,
        pessoas
    )
}