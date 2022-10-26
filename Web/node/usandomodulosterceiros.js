const _ = require('lodash') //procure dentro do node_modules a biblioteca lodash
setInterval(()=> console.log(_.random(1,10),2000))
// a biblioteca nodemon quando rodamos npm nodemon e rodamos cd node/ nodemon usandomodulosterceiros.js ele fica dando refresh enquanto executa o código