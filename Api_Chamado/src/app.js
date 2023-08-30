import express from 'express'
import routes from './routes.js'
import cors from 'cors';


const app = express()

app.use(cors());

//indicar para o express ler body ou json
app.use(express.json())

//usar o router 
app.use(routes)





export default app
