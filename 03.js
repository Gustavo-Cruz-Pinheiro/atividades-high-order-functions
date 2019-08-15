const data = require("./data.js");

const usuariosMoramMonroe = data.find(
  usuario => usuario.address.city.toUpperCase() === "MONROE"
);

console.table(usuariosMoramMonroe);
