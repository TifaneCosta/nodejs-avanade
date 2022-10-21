import fs from 'fs';

console.log(process.argv);
//0 - node 1 - ex3.js 2- html
if(process.argv[2]){
    const cmd = process.argv[2];
    let folders = [];
    let files = [];

    switch (cmd) {
        case "html":
          folders = [
            "assets",
            "assets/css",
            "assets/js",
            "assets/images",
            "assets/fonts",
          ];
          files = ["index.html", "assets/css/style.css", "assets/js/main.js"];
          break;
        case "react":
          folders = [
            "src",
            "src/components",
            "src/pages",
            "src/assets",
            "src/assets/css",
            "src/assets/js",
            "src/assets/images",
            "src/assets/fonts",
          ];
          files = [
            "src/index.js",
            "src/components/App.js",
            "src/pages/Home.js",
            "src/assets/css/style.css",
            "src/assets/js/main.js",
          ];
          break;
        default:
          console.log("Invalid command");
      }

      folders.forEach((folder) => {
        if (!fs.existsSync(folder)){
          fs.mkdirSync(folder);
          console.log('Pasta: ', folder, ' criada com sucesso!');
        } else {
          console.log('Pasta: ', folder, ' já existe!'); 
        }
      });
    
    }
  

/*const dir = './upload';
const file = 'lakers.txt';
const path = `${dir}/${file}`;

if(!fs.existsSync(dir)) {
    fs.mkdir(dir, (err) => {
        //se der um erro, ele vai retornar um erro e para a execução
        if (err) throw err;
        //se passar do throw ele vai executar o código abaixo

        console.log(`Diretório ${dir} criado com sucesso`);
    });
} else {
    console.log(`Acessando diretório ${dir}`);
}
*/

/*

let msg = 'O melhor time de basquete do mundo é o Los Angeles Lakers';

if(!fs.existsSync(path)) {
    fs.writeFile(path, msg, (err) => {
        if (err) throw err;
        console.log(`Arquivo ${file} criado com sucesso`);
    });
}

*/


//node ex3 html --complete


//desafio de lógica: se passar o comando node ex3 html --complete, deve criar os files do array files