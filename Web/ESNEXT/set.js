//nao aceita repetição e não é indexado
const times = new Set()

times.add('Vasco')
times.add('sp').add('palmeiras').add('Corinthians')
times.add('flamengo')
times.add('Vasco')
console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete("flamengo")
console.log(times.has('flamengo'))
const nomes = ['Raquel',"lucas","enzo","lucas"]
const nomesSet = new Set(nomes)
console.log(nomesSet)