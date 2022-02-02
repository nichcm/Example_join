const { Router } = require('express')
const PessoasController = require('../Controllers/PessoasController')



const router = Router()

router.get('/Pessoas', PessoasController.pegaTodasAsPessoas)
// router.post('/niveis', NivelController.criaNivel)


module.exports = router