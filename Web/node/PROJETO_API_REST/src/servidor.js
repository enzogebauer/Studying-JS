const porta = 3003 
const express = require('express')
const app = express()
const bancodedados = require('./bancoDeDados')
app.get('/produtos',(req,res,next)=>{
  res.send(bancodedados.getProdutos())
})

app.get('/produtos/:id',(req,res,next )=>{
  res.send(bancodedados.getProduto(req.params.id))
})
app.post('/produtos ',(req,res,next) => { 
  const produto = bancodedados.salvarProduto({
    nome:req.body.name,
    preco: req.body.preco
  })
  res.send(produto) //converte o obj em um json que será enviado para a web 
})
app.listen(porta,()=>{
  console.log(`Servidor executando na porta ${porta}.`) 
})
 