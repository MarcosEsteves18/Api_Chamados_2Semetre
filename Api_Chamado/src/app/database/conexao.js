import mysql from 'mysql'

const conexao = mysql.createConnection({
    rost: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'controle_chamados'
})

conexao.connect()

/**
 * executa um codigo sql, com ou sem valores
 * @param {String} sql  instrução sql a ser executada
 * @param {String=id / [chamado, id], [setores, id], [cadastro, id] } valores valores a serem passados para o sql
 * @param {String} mensagemReject mensagem a ser exibida
 * @returns objeto da Promisse 
 */

export const consulta = (sql, valores='', mensagemReject)=>{
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if(erro) return reject (erro)
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })
}

export default conexao