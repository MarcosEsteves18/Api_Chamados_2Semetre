/**Codigo Da Api para fazer no cmd 

npm init -y
npm install express --save

codigo que teremos que rodar para iniciar o servidor antes de fazer o script no pakage.json
node src/app.js


instalando o nodemon para nao precisar mais reiniciar o servidor
npm install nodemon -D


depois de incluir o novo script no package.json 
 "dev": "nodemon src/app.js",

voce vai usar o codigo no cmd para rodar o servidor
npm run dev 


npm install mysql
 */

import app from './app.js'

const PORT = process.env.PORT || 3000


 //escutar a porta 300
 app.listen(PORT, () => {
    console.log(`Servidor rodado no endereço http://localhost:${PORT}`)
})
