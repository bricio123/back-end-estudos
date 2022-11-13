
//file system
//usamos o .promises para ele retornar somente depois que ele ler todos os arquivos
const fs = require('fs').promises;
//o path será usado para pegar a pasta atual e nao bugar na hora de ler as pastas
const path = require('path');

//usando a promise e resolvendo a leitura das pastas com o path
fs.readdir(path.resolve(__dirname))
   .then(files => console.log(files))
   .catch(e => console.log(e));