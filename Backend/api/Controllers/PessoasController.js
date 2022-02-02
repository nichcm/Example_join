const database = require('../models')

class PessoasController {

    static async pegaTodasAsPessoas(req,res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaAnimaisDaPessoa( req, res){
        const { pessoaId } =  req.params
        try {
          const todosAnimais = await database.sequelize
          .query(
            'SELECT a.nome, a.especie, p.nome, p.id FROM pessoas p INNER JOIN animais a ON a.PessoaId = p.id WHERE p.id = :pessoaId;',
            {
                replacements: { pessoaId },
                type: database.sequelize.QueryTypes.SELECT
            }
          )
          return res.status(200).json(todosAnimais)
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }    

    


}

module.exports = PessoasController