/*
=============== FUNÇÕES CONSTRUTORAS ===============

Relembrando que nós podemos declarar propriedades públicas sem usar o método 
constructor, mas isso nos impediria de atribuir os parâmetros do objeto passado 
como argumento da invocação da classe. Por isso precisamos do constructor, para 
recebermos as propriedades como parâmetro.

Diferente de outras linguagens, em javscript, tecnicamente não existem classes, 
elas são apenas um sintax sugar, ou seja, uma abstração que é um processo de 
ocultar certos detalhes de implementação e expor outros para que através de um 
código mais simples possamos lidar com estruturas mais complexas. O async/await 
é um exemplo de abstração de promise.

Então o que as classes abstraem? A classe em javascript é uma função construtora. 
Todo função construtora precisa ser uma function declaration, isso porque quando 
são criamos com arrow function, um typeError será gerado informando que a função 
não é construtora. Isso porque o this dentro de uma arrow function não referencia 
o objeto que está sendo criado e sim o this do escopo em que a arrow function foi 
declarada. Por isso não declaramos funções construtoras com arrow function.

Portanto, por baixo dos panos o que a declaração de uma classe faz é criar uma 
função construtora para gerar e setar um objeto, portando, a classe é uma abstração 
de uma função construtora.

Intuitivamente também declararíamos os métodos dentro da função construtora, 
semelhante a Class, no entanto esse não é uma boa prática e mais a frente veremos 
como resolver.

* Na maioria da vezes, quando nos depararmos com códigos usando funções construtoras, 
os métodos provavelmente estão sendo usados com function declarations e não arrow 
functions, isso porque provavelmente o arrow function é mais recente e não funciona 
em browser mais antigos, portanto os desenvolvedores deixam com function declaration 
para não quebrar o código para browser antigos.

*/

class Student {
  constructor (name, email) {
    this.name = name
    this.email = email
  }

  myFunc = () => this // referencia objeto do escopo onde foi declarada / Objeto Student
}

// função construtora
function Student (name, email) {
  this.name = name // referencia objeto criado
  this.email = email // referencia objeto criado

  setTimeout(() => { // arrow function
    console.log(this) // referencia objeto do escopo onde foi declarada / Objeto Student
  }, 1000)

  this.login = function () { // método declarado dentro da função construtora / isso não é bom
    return `${this.name} logou na aplicação.`
  }
}

// arrow function / função construtora
const Student = (name, email) => {
  this.name = name // referencia objeto do escopo onde foi declarada / Objeto Window
  this.email = email // referencia objeto do escopo onde foi declarada / Objeto Window
}

const roger = new Student('Roger Santos', 'roger.santos36@gmail.com')

/*
=============== PROTOTYPES ===============



*/
