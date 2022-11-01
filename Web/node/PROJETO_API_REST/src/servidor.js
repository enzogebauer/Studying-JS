const porta = 3003 
const express = require('express')
const app = express()
const bancodedados = require('./bancoDeDados')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true,}))
app.get('/produtos',(req,res,next)=>{
  res.send(bancodedados.getProdutos())
})

app.get('/produtos/:id',(req,res,next )=>{
  res.send(bancodedados.getProduto(req.params.id))
})
app.post('/produtos/',(req,res,next) => { 
  const produto = bancodedados.salvarProduto({
    nome:req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) //converte o obj em um json que será enviado para a web 
})
app.post('/produtos/:id',(req,res,next) => { 
  const produto = bancodedados.salvarProduto({
    id:req.body.id,
    nome:req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) //converte o obj em um json que será enviado para a web 
})
app.listen(porta,()=>{
  console.log(`Servidor executando na porta ${porta}.`) 
})
 