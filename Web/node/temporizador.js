const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *',function(){
  console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(functionn (){
  tarefa1.cancel()
  console.log('cancelando tarefa 1!')
},2000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(15)]