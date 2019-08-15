const data = require("./data.js");

data.forEach(usuario => (usuario.age = usuario.age * 2));

const usuariosFiltradosMax50Anos = data.filter(usuario =>
  usuario.age < 50 ? true : false
);

console.table(usuariosFiltradosMax50Anos);
