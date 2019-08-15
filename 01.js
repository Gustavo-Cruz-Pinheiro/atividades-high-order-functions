const data = require("./data.js");

const idade = data.map(usuario => usuario.age);

console.table(idade);
