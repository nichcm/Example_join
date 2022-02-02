const database = require('../models')

class AnimaisController {

    static async pegaTodasOsAnimais(req,res){
        try {
            const todasOsAnimais = await database.Animais.findAll()
            return res.status(200).json(todasOsAnimais)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    

}

module.exports = AnimaisController