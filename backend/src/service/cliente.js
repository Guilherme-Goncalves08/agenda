import Cliente from '../model/cliente.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const JWT_SEGREDO = "M3uS3gr3d0"
const SALT = 10 // 12

class ServiceCliente {

    async FindAll() {
        return Cliente.findAll()
    }

    async FindOne(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        // preciso procurar um usuario no banco
        const user = await Cliente.findByPk(id)

        if (!user) {
            throw new Error(`Usuário ${id} não encontrado`)
        }

        return user
    }

    async Create(nome, email, senha, ativo, ) {
        if (!nome || !email || !senha) {
            throw new Error("favor preencher todos os campos")
        }

        const senhaCrip = await bcrypt.hash(String(senha), SALT)

        await Cliente.create({
            nome,
            email,
            senha: senhaCrip,
            ativo
        })
    }

    async Update(id, nome, senha) {
        const oldUser = await Cliente.findByPk(id)
        oldUser.nome = nome || oldUser.nome

        oldUser.senha = senha
            ? await bcrypt.hash(String(senha), SALT)
            : oldUser.senha

        Cliente.update(id, nome)
    }

    async Delete(id) {
        const oldUser = await Cliente.findByPk(id)

        oldUser.destroy()
    }

    async Login(email, senha) {
        if(!email || !senha) {
            throw new Error("Email ou senha inválidos.")
        }

        const user = await Cliente.findOne({ where: { email } })

        // if (
        //     !user
        //     || !(await bcrypt.compare(String(senha), user.senha))
        // ) {
        //     throw new Error("Email ou senha inválidos.")
        // }

        return jwt.sign(
            { id: user.id, nome: user.nome},
            JWT_SEGREDO,
            { expiresIn: 60 * 60 }
        )
    }
}

export default new ServiceCliente()