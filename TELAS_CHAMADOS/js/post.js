function limpar(){
    document.getElementById('nome_funcionario').value = '';
    document.getElementById('nome_setor').value = '';
    document.getElementById('classificacao').value = '';
    document.getElementById('data_inicial').value = '';
    document.getElementById('descricao').value = '';
}

// functions
function fazPost(url, body){
    let req = new XMLHttpRequest()
    req.open("POST", url, true)
    req.setRequestHeader("Content-type", "application/json")
    req.send(JSON.stringify(body))
    req.onload = function(){
        console.log(this.responseText)
    }
    return req.responseText
}

function abrirChamado(){
    let url = "http://localhost:3000/chamado"
    let nome_funcionario = document.getElementById('nome_funcionario').value
    //let nome_setor = document.getElementById('nome_setor').value
    let classificacao =  document.getElementById('classificacao').value
    let data_inicial = document.getElementById('data_inicial').value
    let descricao = document.getElementById('descricao').value

    body = {
       
        "descricao" : descricao,
        "data_inicial" : data_inicial,
        "data_final": null,
        "classificacao" : classificacao,
        "status": null,
        "prioridade" : null,
        "usuario_solicitante" : nome_funcionario,
        "usuario_executante" : null
    }
    console.log(body)
    fazPost(url, body)
}