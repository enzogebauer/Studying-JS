// this na arrow function é fixo, ou seja ele depende do contexto da função arrow
function Pessoa(){
  this.idade =0;

    setInterval(()=> {
      this.idade++
      console.log(this.idade)
    },1000)
}
new Pessoa
