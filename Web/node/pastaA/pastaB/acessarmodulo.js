const moduloA  = require("../../moduloA") //sempre respeite as letras maiúsculas e minúsculas ou usar o caminho absoluto (que não é muito legal por ser muito longo), caminho relativo é a chave, mas os nomes dos arquivos tem que ser respeitados
console.log(moduloA)
const http = require("http")
http.createServer((req,res)=>{
  res.write("Bom dia")
  res.end()
}).listen(8080)


const c = require("./pastaC/index")
console.log(c.ola2)