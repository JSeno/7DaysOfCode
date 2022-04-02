/*

Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

*/

function getUserInfo() {
  let name = prompt("Qual o seu nome?");
  let age = prompt("Quantos anos você tem?");
  let language = prompt("Qual linguagem de programação você está estudando?");

  console.log(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`);
}