Vc vai me ver fazendo essa recomendação de maneira mais intensa à partir da etapa 12, mas basicamente...

Classes CSS foram criadas para manipular estilos. Seu código fica mais organizado quando vc não seleciona pelo atributo class e deixa as classes apenas para o CSS.

id tem o efeito colateral nos browsers de gerar uma variável global que aponta para o elemento que tem aquele ID.

Se na marcação HTML for declarado um atributo id com o valor x, se você inserir window.x (ou simplesmente x) como argumento de um console.log(), o retorno será a referência do elemento.
<p id="x">Olá</p>
console.log(window.x) // <p id="x">Olá</p>
console.log(x) // <p id="x">Olá</p>
Sempre que possível, evite variáveis globais. Elas podem ser modificadas de qualquer lugar da aplicação, podem se sobrescrever (se duas variáveis globais tiverem o mesmo nome) e isso pode minar a modularidade do código.

Se você retirar o id="x", as execuções dos console.log() acima resultarão em undefined.

Então, para não gerar variáveis globais desnecessárias, o ideal é usar data-* para manipulação de DOM via JS, e usar IDs somente para inputs, por conta da acessibilidade do atributo for das labels ou quando você quiser fazer âncoras na sua página, aí você também precisa do ID. Para todos os outros casos, evite =)

Outra questão de organização é que se você comparar, lado a lado, duas versões do mesmo arquivo .html, uma com data-* e class e outra apenas com class, verá que ao bater o olho no arquivo com data-js e class, você distingue rapidamente quais elementos estão sendo manipulados pelo JavaScript. Isso não é possível ao bater o olho na versão do arquivo que usa apenas class.

A forma mais confiável de identificar elementos e manipulá-los em JavaScript (puro) é usar o atributo data-* =)