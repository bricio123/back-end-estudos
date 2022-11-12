const nome = "Fabricio";
const sobrenome = "Sousa";

//importação comm concatenação
const falaNome = () => nome + ' ' + sobrenome;


module.exports.NOME = nome;
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;


exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = "Qualquer coisa que eu quiser exportar"

console.log(exports)