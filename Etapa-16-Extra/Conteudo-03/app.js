/*
  ================ DEBOUNCE FUNCTIONS ================

  Debouncing é um padrão de programação ou uma técnica que restringe a chamada 
  de uma função que é consumida frequentemente aplicando um "delay" na execução 
  até um especificado tempo para evitar o uso desnecessário de ciclos da CPU ou 
  evitar chamadas excessivas á uma API melhorando assim o desempenho.

  É uma "higher-order function" que retorna outra função criando uma closure em 
  volta dos parâmetros da função e a varíavel contadora.

*/

const input = document.querySelector("[data-input]");

function debounce(func, timeout = 500) {
  let timer = undefined;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function fetchResults() {
  console.log("Fetching input seggestions");
}

const processChange = debounce(() => fetchResults());

input.addEventListener("keyup", processChange);

/*
  https://blog.bitsrc.io/what-is-debounce-in-javascript-a2b8e6157a5a


  ESTUDAR SOBRE:

  [] - apply()
  [] - bind()
  [] - call()
  [] - closures

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
*/
