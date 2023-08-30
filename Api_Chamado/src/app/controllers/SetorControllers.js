import SetorRepositories from '../repositories/SetorRepositories.js'

class SetorController{
    
    //select *
    async index (req, res) {
        const resultado = await SetorRepositories.findAll()
        res.json(resultado)
    }

    //listar tudo por id
    async show(req, res) {
        const id = req.params.id
        const row = await SetorRepositories.findById(id)
        res.json(row)
        
    }

    //criar dados
    async store(req, res) {
        const setores = req.body
        const row = await SetorRepositories.create(setores)
        res.json(row)
    }

    //atualiza dados
    async update(req, res) {
        const setores = req.body
        const id = req.params.id
        const row = await SetorRepositories.update(setores, id)
        res.json(row)
    }

    //apaga dados
    async delete(req, res) {
        const id = req.params.id
        const row = await SetorRepositories.delete(id)
        res.json(row)
    }

}

//padrao singleton
export default new SetorController