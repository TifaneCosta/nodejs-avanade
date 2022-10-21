//commonJS
//const fs =required('fs');
import fs from 'fs';


const dir = 'upload';


//Todas as funções sync são bloqueantes
//Prefira utilizar as funções Async
//sempre que tiver a palavra sync é uma função bloqueante
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log(`criando um diretório: ${dir}`);
} else {
    console.log(`Acessando o diretório: ${dir}`);
}

let msg = 'O melhor time de basquete do mundo é o Golden State Warriors';
let file = 'gordel-satate-warriors.txt';
let path = `${dir}/${file}`;

if(!fs.existsSync(dir + '/' + file)) {
    fs.writeFileSync(path,msg);
    console.log(`Arquivo ${file} criado com sucesso`);
}