import {consulta} from '../database/conexao.js'

class ChamadoRepositories{
    //crud

    //inserir novo elemento
    create(chamado) {
        //const sql = "INSERT INTO `controle_chamados`.`chamado` (`descricao`, `data_inicial`, `classificacao`, `status`, `prioridade`, `usuario_solicitante`, `usuario_executante`) VALUES ('?', '?', '?', 'Aberto', 'Alta', '?', 'Marcelo');"
        const sql = "INSERT INTO chamado SET ?;"
        return consulta(sql, chamado, 'Nao foi possivel cadastrar')
    }

    //select * 
    findAll() {
        const sql = "SELECT * FROM chamado;"
        return consulta(sql, 'Nao foi possivel Localizar!')
    }

    //buscar por id
    findById(id) {
        const sql = "SELECT * FROM chamado WHERE id_chamado=?;"
        return consulta(sql, id, 'Nao foi possivel Localizar!')
    }

    //atualizar 
    update(data_final, status, id) {
        const sql = "UPDATE `controle_chamados`.`chamado` SET `data_final` = ?, `status` = ? WHERE (`id_chamado` = ?);"
        return consulta(sql, [data_final, status, id], 'Nao foi possivel Atualizar!')
    }
    //deletar
    delete(id) {
        const sql = "DELETE FROM chamado WHERE id_chamado=?;"
        return consulta(sql, id, 'Nao foi possivel Apagar!')
    }
}

export default new ChamadoRepositories()