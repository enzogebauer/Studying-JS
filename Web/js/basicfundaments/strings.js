const escola = " primal"
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('d'))

console.log(escola.substring(1))// lê a string do índice um até o fim
console.log(escola.substring(1,3))// lê a string do índice um até o índice limite, excluindo o índice limite
console.log(escola.replace(3,'e')); // substitui o 3 pela letra e
console.log('Ana,Maria,Pedro'.split(',')) // transforma a string em um array, cujos elementos estão separados
                                            // na string pelo caractere ","
console.log('escola' + escola + "!")
