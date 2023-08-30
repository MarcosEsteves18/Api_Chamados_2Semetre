

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

function fazGet(url){
    let req = new XMLHttpRequest()
    req.open("GET",url, false)
    req.send()
    return req.responseText
}

function fazPut(id, body){
    const url = 'http://localhost:3000/cadastro/'+id
    const response = fetch(url, {
        method: 'PUT',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(body)
    }).then(res => 
        alert("Cadastro: " + id + " atualizado com sucesso.")
    ).catch(err => {
        console.log(err)
    })

    console.log(response)


//     let req = new XMLHttpRequest()
//     req.open("PUT", url, true)
//     req.setRequestHeader("Content-type", "application/json")
//     req.send(JSON.stringify(body))
//     req.onload = function(){
//         console.log(this.responseText)
//     }
//     req.send(JSON.stringify(body))
//     return req.responseText
}

function fazDelete(url){
    let req = new XMLHttpRequest()
    req.open("DELETE", url, true)
    req.setRequestHeader("Content-type", "application/json")
    req.send()
    req.onload = function(){
        console.log(this.responseText)
    }
    return req.responseText
}

function fazLinha(cadastro){
    let linha = document.createElement('tr')
    let colId_funcionario = document.createElement('td')
    let colNome = document.createElement('td')
    let colSetor = document.createElement('td')
    
    colId_funcionario.innerHTML = cadastro.id_funcionario
    colNome.innerHTML = cadastro.nome_funcionario
    colSetor.innerHTML = cadastro.setor_cod_setor

    linha.appendChild(colId_funcionario)
    linha.appendChild(colNome)
    linha.appendChild(colSetor)
    
    return linha
}

function buscar(id){
    let dados = fazGet("http://localhost:3000/cadastro/"+ id);
    let teste = JSON.parse(dados)
    let p = document.getElementById('sla')
    teste.forEach(element => {
        p.appendChild(fazLinha(element))
    })
    
}

// document.getElementById('attUsua').addEventListener('click', att)

function att(){
    alert("TESTEEE att usu")
    let id = parseInt(document.getElementById('index').value);
   
    let nome_funcionario = document.getElementById('nome_funcionario').value;
    let setor_cod_setor = document.getElementById('setor_cod_setor').value;
    let body = {
        "nome_funcionario": nome_funcionario,
        "setor_cod_setor" : setor_cod_setor
    }
    console.log(body)
   
    fazPut(id, body);
}

function deletar(){
    let id = parseInt(document.getElementById('busca').value);
    let url = "http://localhost:3000/cadastro/" + id;
    fazDelete(url);
}
function main(){
    let dados = fazGet("http://localhost:3000/cadastro")
    let tab = document.getElementById("tabela")
    let chamado = JSON.parse(dados)
    chamado.forEach(element => {
        let linha = fazLinha(element)
        tab.appendChild(linha)
    });
}
function salvar(){
    let url = "http://localhost:3000/cadastro"
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let setor = document.getElementById("setor").value;

    body = {
       
        "nome_funcionario" : nome,
        "senha" :senha,
        "setor_cod_setor": setor
    }
    console.log(body)
    fazPost(url, body)
}
main();