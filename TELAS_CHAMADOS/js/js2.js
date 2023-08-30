
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
    const url = 'http://localhost:3000/setor/'+id
    const response = fetch(url, {
        method: 'PUT',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(body)
    }).then(res => 
        alert("Setor: " + id + " atualizado com sucesso.")
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

function fazLinha(setor){
    let linha = document.createElement('tr')
    let colId_setor = document.createElement('td')
    let colNome_setor = document.createElement('td')
    let colFuncao = document.createElement('td')
    let colRamal = document.createElement('td')

    colId_setor.innerHTML = setor.id_setor
    colNome_setor.innerHTML = setor.nome_setor
    colFuncao.innerHTML = setor.funcao
    colRamal.innerHTML = setor.ramal

    linha.appendChild(colId_setor)
    linha.appendChild(colNome_setor)
    linha.appendChild(colFuncao)
    linha.appendChild(colRamal)
    return linha
}

function buscar(id){
    let dados = fazGet("http://localhost:3000/setor/"+ id);
    let teste = JSON.parse(dados)
    let p = document.getElementById('sla')
    teste.forEach(element => {
        p.appendChild(fazLinha(element))
    })
    
}

document.getElementById('btnAtt').addEventListener('click', att)

function att(){
    let id = parseInt(document.getElementById('index').value);

    let nome_setor = document.getElementById('nome_setor').value;
    let funcao = document.getElementById('funcao').value;
    let ramal = document.getElementById('ramal').value;
    let body = {

        "nome_setor": nome_setor,
        "funcao" : funcao,
        "ramal" : ramal
    }
    console.log(body)

    fazPut(id, body);
}

function deletar(){
    let id = parseInt(document.getElementById('busca').value);
    let url = "http://localhost:3000/setor/" + id;
    fazDelete(url);
}
function main(){
    let dados = fazGet("http://localhost:3000/setor")
    let tab = document.getElementById("tabela")
    let chamado = JSON.parse(dados)
    chamado.forEach(element => {
        let linha = fazLinha(element)
        tab.appendChild(linha)
    });
}
function salvar(){
    let url = "http://localhost:3000/setor"
    let nome_setor = document.getElementById("nome_setor").value;
    let funcao = document.getElementById("funcao").value;
    let ramal = document.getElementById("ramal").value;

    body = {
        "nome_setor" : nome_setor,
        "funcao" : funcao,
        "ramal": ramal
    }
    console.log(body)
    fazPost(url, body)
}
main();