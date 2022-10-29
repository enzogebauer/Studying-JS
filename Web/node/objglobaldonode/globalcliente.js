require('./global')

console.log(MinhaApp.nome)
console.log(MinhaApp.saudacao())

MinhaApp.nome = "Eita!" // não muda por causa do método Object.freeze
console.log(MinhaApp.nome)