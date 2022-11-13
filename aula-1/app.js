//const mod1 = require('./mod1');
//const falaNome = mod1.falaNome;

//console.log(falaNome());



//Com desestruturação

//const {nome, sobrenome, falaNome} = require('./mod1');
//console.log(nome,sobrenome);

//console.log(falaNome());


//usando a classe
const {Pessoa } = require('./mod1');
const path = require('path');
const axios = require('axios'); 

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json ')
    .then(response => console.log(response.data))
    .catch(e=> console.log(e))