//1 - crie uma função que exiba uma mensagem no console

function hello(){
    console.log("Olá")
    console.log("Mundo!")
}

hello()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function person(name){
    console.log(`Olá ${name} você é lindo`)
}

person("Gabriel")

//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console

function dadosPessoais(pessoa, number, musica){
    console.log(`Oi ${pessoa}, você tem ${number} anos e ama ${musica}.`)
}

dadosPessoais("Gabriel", "17","trap")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function gostos(filme, music){
    console.log(`Caramba, voce gosta de ${filme} igual eu! E escuta ${music}, muito show!`)
}

gostos("Polar", "M4")

//5 - crie uma função que retorne o triplo do número recebido no (parâmetro)

function triplo(x){
    return x*3
}

console.log(triplo(8))