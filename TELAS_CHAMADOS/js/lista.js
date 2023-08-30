
function fazGet(url){
    let req = new XMLHttpRequest()
    req.open("GET",url, false)
    req.send()
    return req.responseText
}

function fazPut(id, body){
    const url = 'http://localhost:3000/chamado/'+id
    const response = fetch(url, {
        method: 'PUT',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(body)
    }).then(res => 
        alert("Chamado: " + id + " atualizado com sucesso.")
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

function fazLinha(chamado){
    let linha = document.createElement('tr')
    let colNumeroChamado = document.createElement('td')
    let colSolicitante = document.createElement('td')
    let colDescricao = document.createElement('td')
    let colData_inicial = document.createElement('td')
    let colStatus = document.createElement('td')
    //let colClassificacao = document.createElement('td')

    colNumeroChamado.innerHTML = chamado.id_chamado
    colSolicitante.innerHTML = chamado.usuario_solicitante
    colDescricao.innerHTML = chamado.descricao
    colData_inicial.innerHTML = chamado.data_inicial
    colStatus.innerHTML = chamado.status
    //colClassificacao.innerHTML = chamado.classificao

    linha.appendChild(colNumeroChamado)
    linha.appendChild(colSolicitante)
    linha.appendChild(colDescricao)
    linha.appendChild(colData_inicial)
    linha.appendChild(colStatus)
    //linha.appendChild(colClassificacao)
    return linha
}

function buscar(id){
    let dados = fazGet("http://localhost:3000/chamado/"+ id);
    let teste = JSON.parse(dados)
    let p = document.getElementById('sla')
    teste.forEach(element => {
        p.appendChild(fazLinha(element))
    })
    
}

document.getElementById('btnAtt').addEventListener('click', att)

function att(){
    let id = parseInt(document.getElementById('index').value);

    let data_final = document.getElementById('data_final').value;
    let status = document.getElementById('status').value;
    let body = {
        "data_final": data_final,
        "status" : status
    }
    console.log(body)
   
    fazPut(id, body);
}

function deletar(){
    let id = parseInt(document.getElementById('index').value);
    let url = "http://localhost:3000/chamado/" + id;
    fazDelete(url);
}
function main(){
    let dados = fazGet("http://localhost:3000/chamado")
    let tab = document.getElementById("tabela")
    let chamado = JSON.parse(dados)
    chamado.forEach(element => {
        let linha = fazLinha(element)
        tab.appendChild(linha)
    });
}
main();


