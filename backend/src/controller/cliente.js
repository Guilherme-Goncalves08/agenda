import ServiceCliente from '../service/cliente.js'

class ControllerCliente {
    
    async FindAll(_, res) {
        try {
            const clientes = await ServiceCliente.FindAll()
            res.status(200).send({ clientes })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    
    async FindOne(req, res) {
        try {
            const id = req.params.id || req.headers?.cliente?.id

            const cliente = await ServiceCliente.FindOne(id)
            res.status(200).send({ cliente })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async Create(req, res) {
        try {
            // const loggedUser = req.headers?.cliente
            // let permissao = 1
            // if(loggedUser && loggedUser.permissao === 0){
            //     permissao = req.body.permissao
            // }
            const { nome, email, senha, ativo } = req.body
            await ServiceCliente.Create(nome, email, senha, ativo)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    
    Update(req, res) {
        try {
            const id = req.params.id || req.headers?.cliente?.id
            const nome = req.body.nome
            ServiceCliente.Update(id, nome)
            res.status(200).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    
    async Delete(req, res) {
        try {
            const id = req.params.id || req.headers?.cliente?.id
            await ServiceCliente.Delete(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { email, senha } = req.body

            const token = await ServiceCliente.Login(email, senha)

            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

}
export default new ControllerCliente()