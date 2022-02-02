const { Router } = require('express')
const  AnimaisContoller = require('../controllers/AnimaisContoller')



const router = Router()

router.get('/Animais', AnimaisContoller.pegaTodasOsAnimais)
// router.post('/niveis', NivelController.criaNivel)


module.exports = router