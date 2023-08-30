import {consulta} from '../database/conexao.js'

class SetorRepositories{
    //crud

    //inserir novo elemento
    create(setores) {
        const sql = "INSERT INTO setor SET ?;"
        return consulta(sql, setores, 'Nao foi possivel cadastrar')
    }

    //select * 
    findAll() {
        const sql = "SELECT * FROM setor;"
        return consulta(sql, 'Nao foi possivel Localizar!')
    }

    //buscar por id
    findById(id) {
        const sql = "SELECT * FROM setor WHERE id_setor=?;"
        return consulta(sql, id, 'Nao foi possivel Localizar!')
    }

    //atualizar 
    update(nome_setor, funcao, ramal, id) {
        const sql = "UPDATE `controle_chamados`.`setor` SET `nome_setor` = ?, `funcao` = ?, `ramal` = ? WHERE (`id_setor` = ?);"
        return consulta(sql, [nome_setor, funcao, ramal, id], 'Nao foi possivel Atualizar!')
    }
    //deletar
    delete(id) {
        const sql = "DELETE FROM setor WHERE id_setor=?;"
        return consulta(sql, id, 'Nao foi possivel Apagar!')
    }
}

export default new SetorRepositories()