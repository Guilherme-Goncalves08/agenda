import express from 'express'
import ControllerAtendimento from '../controller/atendimento.js'

const routerAtendimento = express.Router()

routerAtendimento.post('/login', ControllerAtendimento.Login)

routerAtendimento.get('/atendimento/context',  ControllerAtendimento.FindOne)
routerAtendimento.post('/atendimento/', ControllerAtendimento.Create)
routerAtendimento.put('/atendimento/',  ControllerAtendimento.Update)
routerAtendimento.delete('/atendimento/',  ControllerAtendimento.Delete)

routerAtendimento.get('/atendimento', ControllerAtendimento.FindAll)
routerAtendimento.get('/atendimento/:id', ControllerAtendimento.FindOne)
routerAtendimento.post('/atendimento/admin', ControllerAtendimento.Create)
routerAtendimento.put('/atendimento/:id', ControllerAtendimento.Update)
routerAtendimento.delete('/atendimento/:id', ControllerAtendimento.Delete)

export default routerAtendimento