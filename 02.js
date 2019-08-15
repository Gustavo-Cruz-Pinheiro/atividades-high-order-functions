const data = require("./data.js");

const usuariosFiltradosFemMais18 = data.filter(usuario =>
  usuario.age > 18 && usuario.gender == "Female" ? true : false
);

console.table(usuariosFiltradosFemMais18);
