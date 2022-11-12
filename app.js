const mod1 = require('./mod1');
const falaNome = mod1.falaNome;

console.log(falaNome());



//Com desestruturação

const {nome, sobrenome, falaNome} = require('./mod1');
console.log(nome,sobrenome);

console.log(falaNome());