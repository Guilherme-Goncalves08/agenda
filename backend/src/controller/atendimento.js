import ServiceAtendimento from '../service/atendimento.js'

class ControllerAtendimento {
    
    async FindAll(_, res) {
        try {
            const atendimento = await ServiceAtendimento.FindAll()
            res.status(200).send({ atendimentos: atendimento })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    
    async FindOne(req, res) {
        try {
            const id = req.params.id || req.headers?.atendimento?.id

            const atendimento = await ServiceAtendimento.FindOne(id)
            res.status(200).send({ atendimento: atendimento })
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
            const { data, hora, valor, concluido } = req.body
            await ServiceAtendimento.Create(data, hora, valor, concluido)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    
    Update(req, res) {
        try {
            const id = req.params.id || req.headers?.atendimento?.id
            const data = req.body.nome
            ServiceAtendimento.Update(id, data)
            res.status(200).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    
    async Delete(req, res) {
        try {
            const id = req.params.id || req.headers?.atendimento?.id
            await ServiceAtendimento.Delete(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    // async Login(req, res) {
    //     try {
    //         const { email, senha } = req.body

    //         const token = await ServiceCliente.Login(email, senha)

    //         res.status(200).send({ token })
    //     } catch (error) {
    //         res.status(500).send({ error: error.message })
    //     }
    // }

}
export default new ControllerAtendimento()