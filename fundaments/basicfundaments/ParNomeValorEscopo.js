// par nome/ valor
const saudacao = 'Opa'// contexto do léxico 1
function exec(){
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao // apesar do nome igual, por estarem em contextos diferentes não gera conflito
}
//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    enderelo: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    },
    numero: 81
}
console.log(saudacao)
console.log(exec())
console.log(cliente)