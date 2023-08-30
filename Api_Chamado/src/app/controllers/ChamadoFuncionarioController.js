import ChamadoFuncionarioRepositories from '../repositories/ChamadoFuncionarioRepositories.js'

class ChamadoFuncionarioRepositories{
    
    //select *
    async index (req, res) {
        const resultado = await ChamadoFuncionarioRepositories.findAll()
        res.json(resultado)
    }

    //listar tudo por id
    async show(req, res) {
        const id = req.params.id
        const row = await ChamadoFuncionarioRepositories.findById(id)
        res.json(row)
        
    }

    //criar dados
    async store(req, res) {
        const chamado = req.body
        console.log(chamado)
        const row = await ChamadoFuncionarioRepositories.create(chamado)
       // res.json(row)
    }

    //atualiza dados
    async update(req, res) {
        const {data_final, status} = req.body
        const id = req.params.id
        const row = await ChamadoFuncionarioRepositories.update(data_final, status, id)
        res.status(200).json(row)
    }

    //apaga dados
    async delete(req, res) {
        const id = req.params.id
        const row = await ChamadoFuncionarioRepositories.delete(id)
        res.json(row)
    }

}

//padrao singleton
export default new ChamadoFuncionarioRepositories