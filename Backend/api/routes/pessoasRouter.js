const { Router } = require('express')
const PessoasController = require('../Controllers/PessoasController')



const router = Router()

router.get('/Pessoas', PessoasController.pegaTodasAsPessoas)
router.get('/AnimaisDaPessoa/:pessoaId', PessoasController.pegaAnimaisDaPessoa)
// router.post('/niveis', NivelController.criaNivel)


module.exports = router