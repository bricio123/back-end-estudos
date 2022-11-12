const nome = "Fabricio";
const sobrenome = "Sousa";

const falaNome = () => {
  console.log(nome, sobrenome);
};
console.log(falaNome)

//module.exports.nome = nome;
//module.exports.sobrenome = sobrenome;
//module.exports.falaNome = falaNome;


exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = "Qualquer coisa que eu quiser exportar"

console.log(exports)