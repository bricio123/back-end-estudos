//file system
//usamos o .promises para ele retornar somente depois que ele ler todos os arquivos
const fs = require("fs").promises;
//o path será usado para pegar a pasta atual e nao bugar na hora de ler as pastas
const path = require("path");

//usando a promise e resolvendo a leitura das pastas com o path
//fs.readdir(path.resolve(__dirname))
//.then(files => console.log(files))
//.catch(e => console.log(e));

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}
async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (/\.git /g.test(fileFullPath)) continue;
    if (/node__modules/g.test(fileFullPath)) continue;
    

    //pegando os arquivos de dentro das pastas
    if ((file, stats.isDirectory())) {
      readdir(fileFullPath);
      continue;
    }

    console.log(fileFullPath);
  }
}
readdir("/Udemy/Javascript back end 2022/node");
