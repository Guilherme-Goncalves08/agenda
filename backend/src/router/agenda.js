import express from 'express'
import ControllerAgenda from '../controller/agenda.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

router.post('/login', ControllerAgenda.Login)

router.get('/cliente/context', authMiddleware(), ControllerAgenda.FindOne)
router.post('/cliente/', ControllerAgenda.Create)
router.put('/cliente/', authMiddleware(), ControllerAgenda.Update)
router.delete('/cliente/', authMiddleware(), ControllerAgenda.Delete)

router.get('/clientes', authMiddleware([0]), ControllerAgenda.FindAll)
router.get('/cliente/:id', authMiddleware([0]), ControllerAgenda.FindOne)
router.post('/cliente/admin', authMiddleware([0]), ControllerAgenda.Create)
router.put('/cliente/:id', authMiddleware([0]), ControllerAgenda.Update)
router.delete('/cliente/:id', authMiddleware([0]), ControllerAgenda.Delete)

export default router