import express from 'express'
import ControllerCliente from '../controller/cliente.js'


const routerCliente = express.Router()

routerCliente.post('/login', ControllerCliente.Login)

routerCliente.get('/cliente/context', ControllerCliente.FindOne)
routerCliente.post('/cliente/', ControllerCliente.Create)
routerCliente.put('/cliente/', ControllerCliente.Update)
routerCliente.delete('/cliente/', ControllerCliente.Delete)

routerCliente.get('/clientes',  ControllerCliente.FindAll)
routerCliente.get('/cliente/:id',  ControllerCliente.FindOne)
routerCliente.post('/cliente/admin',  ControllerCliente.Create)
routerCliente.put('/cliente/:id',  ControllerCliente.Update)
routerCliente.delete('/cliente/:id',  ControllerCliente.Delete)

export default routerCliente