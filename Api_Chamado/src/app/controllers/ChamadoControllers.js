import ChamadoRepositories from '../repositories/ChamadoRepositories.js'

class ChamadoController{
    
    //select *
    async index (req, res) {
        const resultado = await ChamadoRepositories.findAll()
        res.json(resultado)
    }

    //listar tudo por id
    async show(req, res) {
        const id = req.params.id
        const row = await ChamadoRepositories.findById(id)
        res.json(row)
        
    }

    //criar dados
    async store(req, res) {
        const chamado = req.body
        console.log(chamado)
        const row = await ChamadoRepositories.create(chamado)
       // res.json(row)
    }

    //atualiza dados
    async update(req, res) {
        const {data_final, status} = req.body
        const id = req.params.id
        const row = await ChamadoRepositories.update(data_final, status, id)
        res.status(200).json(row)
    }

    //apaga dados
    async delete(req, res) {
        const id = req.params.id
        const row = await ChamadoRepositories.delete(id)
        res.json(row)
    }

}

//padrao singleton
export default new ChamadoController