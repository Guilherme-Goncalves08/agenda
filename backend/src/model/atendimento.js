import database from "../config/database.js"

class Atendimento {
    constructor() {
        this.model = database.db.define('atendimento', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dia: {
                type: database.db.Sequelize.STRING
            },
            hora: {
                type: database.db.Sequelize.STRING
            },
            valor: {
                type: database.db.Sequelize.STRING
            },
            concluido: {
                type: database.db.Sequelize.BOOLEAN
            }
        })

        

    }
}

export default new Atendimento().model