import express from 'express'
import cors from 'cors'
import router from './router/cliente.js';
import database from './config/database.js'

const app = express();

app.use(express.json())
app.use(cors())

app.use('/api/v1', router)
const port = 3000 

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(port, () => {
            console.info("Servidor rodando na porta "+port)
        })
    })
    .catch((e)=> {
        console.log("não conectou com o banco"+ e)
    })

