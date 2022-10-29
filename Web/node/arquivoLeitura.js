const fs = require("fs") //modulo interno do node file system

const caminho = __dirname + '/arquivo.json'

//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)
//asincrono
const conteudoasinc = fs.readFile(caminho,'utf-8',(error,conteudo)=>{
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host} : ${config.db.port} como é assincrono demora mais papito`)
})

//leitura sincrona
const config = require('./arquivo.json')
console.log(`${config.db.host} : ${config.db.port}`)

fs.readdir(__dirname,(err,arq)=> {
  console.log("Conteúdo da pasta.....")
  console.log(arq) //leu todos os arquivos presentes no diretorio de forma assincrona __dirname é uma constante que está presente em todos os módulos do node que representa o diretório atual (dá pra cria-la e colocar nela o caminho dos arquivos como feito lá em cima)
})