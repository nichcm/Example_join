const { Router } = require('express')
const  AnimaisController = require('../controllers/AnimaisContoller')



const router = Router()

router.get('/Animais', AnimaisController.pegaTodasOsAnimais)
// router.post('/niveis', NivelController.criaNivel)


module.exports = router