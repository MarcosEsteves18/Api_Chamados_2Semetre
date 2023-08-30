import CadastroRepositories from '../repositories/CadastroRepositories.js'

class CadastroController{
    
    //select *
    async index (req, res) {
        const resultado = await CadastroRepositories.findAll()
        res.json(resultado)
    }

    //listar tudo por id
    async show(req, res) {
        const id = req.params.id
        const row = await CadastroRepositories.findById(id)
        res.json(row)
        
    }

    //criar dados
    async store(req, res) {
        const cadastro = req.body
        console.log(cadastro)
        const row = await CadastroRepositories.create(cadastro)
       // res.json(row)
    }

    //atualiza dados
    async update(req, res) {
        const cadastro = req.body
        const id = req.params.id
        const row = await CadastroRepositories.update(cadastro, id)
        res.json(row)
    }

    //apaga dados
    async delete(req, res) {
        const id = req.params.id
        const row = await CadastroRepositories.delete(id)
        res.json(row)
    }

}

//padrao singleton
export default new CadastroController