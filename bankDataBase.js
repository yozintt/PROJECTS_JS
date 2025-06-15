/*
1 - Crie um banco de dados(const) com uma lista de usuários {name: string, user: string, password: string, value: number}
2 - Faça uma função de autenticação que recebe como parâmetros user e password
3 - Faça uma função que retira ou adiciona valores na conta de um usuário
4 - Faça uma função que recebe como parâmetro um user, uma senha, e o valor que vai ser adicionado ou retirado da conta, depois realize essas ações
*/

const bancoDeDados = [
  {
    name: "Yoander",
    user: "Yozin",
    password: "Chitaozinho",
    value: 1000,
  },
  {
    name: "Amanda",
    user: "Amandps",
    password: "Patati",
    value: 1000,
  },
  {
    name: "Johannes",
    user: "Aho7",
    password: "Chororo",
    value: 1000,
  },
];

function autenticacao(user, password) {
  for (let i = 0; i < bancoDeDados.length; i++) {
    if (user === bancoDeDados[i].user) {
      console.log(`User: ${bancoDeDados[i].user} Logged`);
      if (password === bancoDeDados[i].password) {
        console.log(`Your password is right!`);
      }
    }
    return bancoDeDados[i].value;
  }
}
console.log(autenticacao("Yozin", "Chitaozinho"));

function deposit(user, amount) {
  for (let i = 0; i < bancoDeDados.length; i++) {
    if (user === bancoDeDados[i].user) {
      amount += bancoDeDados[i].value;
    }
  }
  return amount;
}
console.log(deposit("Yozin", 1000));

function register(name, user, password, value) {
  let bancoDeDadosNovo = [];
  bancoDeDadosNovo = bancoDeDados;
  bancoDeDadosNovo.push({ name, user, password, value });

  return bancoDeDadosNovo;
}
console.log(register("Laís", "cunhadinha", "Patata", 1000));
