// const [a] = [10]
// // console.log(a);
// const [n1, ,n3, ,n5,n6 =0 ] = [10,7,9,8]
// console.log(n1,n3,n5,n6)
//usando em array

const vet = [10,20,30,40,50]
vet[0] = 1
const [a,b,c,d,e,f,g,h,i,j] = [10,11,2,3,4,5,6,7,88,9] 
console.log(a,b,c,d,e,f,g,h,i,j);
const [, [, nota]] = [[, 8], [9,6,8]]
console.log(nota)