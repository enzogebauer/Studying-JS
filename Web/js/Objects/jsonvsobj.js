//Json é um formato de dados mais utilizado para interoperablidade entre sistemas no mercado de programação
  // Trouxe uma forma muito mais simples e direta para os sistemas atuais, sem todas aquela parafernalhasde UML hiperomplicados   
  const obj = {a:1,b:2,c:3, soma(){return a+b+c}}
  console.log(JSON.stringify(obj))
  // ao converter o obj para json a função é excluida pois json não contêm conteúdo executável

  // console.log(JSON.parse("{ a:1,b:2,c:3 }"))
  // console.log(JSON.parse("{ 'a':1,'b':2,'c':3 }"))
  console.log(JSON.parse('{ "a":1,"b":2,"c":3 }'))
  console.log(JSON.parse('{"a":1,"b":"string","c":"true","d":{},"e":[]}'))