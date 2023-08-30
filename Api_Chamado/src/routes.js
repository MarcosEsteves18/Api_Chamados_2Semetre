import {Router} from 'express'
import ChamadoControllers from './app/controllers/ChamadoControllers.js'
import SetorControllers from './app/controllers/SetorControllers.js'
import CadastroControllers from './app/controllers/CadastroControllers.js'

const router = Router()

//ROTAs dos chamados
router.get('/chamado', ChamadoControllers.index)
router.get('/chamado/:id', ChamadoControllers.show)
router.post('/chamado', ChamadoControllers.store)
router.put('/chamado/:id', ChamadoControllers.update)
router.delete('/chamado/:id', ChamadoControllers.delete)
//ROTAS dos setores
router.get('/setor', SetorControllers.index)
router.get('/setor/:id', SetorControllers.show)
router.post('/setor', SetorControllers.store)
router.put('/setor/:id', SetorControllers.update)
router.delete('/setor/:id', SetorControllers.delete)
//ROTAS dos Cadastros
router.get('/cadastro', CadastroControllers.index)
router.get('/cadastro/:id', CadastroControllers.show)
router.post('/cadastro', CadastroControllers.store)
router.put('/cadastro/:id', CadastroControllers.update)
router.delete('/cadastro/:id', CadastroControllers.delete)
//
router.get('/chamado_funcionario', CadastroControllers.index)
router.get('/chamado_funcionario/:id', CadastroControllers.show)
router.post('/chamado_funcionario', CadastroControllers.store)
router.put('/chamado_funcionario/:id', CadastroControllers.update)
router.delete('/chamado_funcionario/:id', CadastroControllers.delete)
export default router