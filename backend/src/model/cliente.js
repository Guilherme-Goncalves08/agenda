import database from "../config/database.js"
import Atendimento from "./atendimento.js";
class Clientes {
    constructor() {
        this.model = database.db.define('cliente', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
            email: {
                type: database.db.Sequelize.STRING
            },
            senha: {
                type: database.db.Sequelize.STRING
            },
            
        })
        this.model.hasMany(Atendimento, { foreignKey: 'clienteId', onDelete: 'CASCADE' });
        Atendimento.belongsTo(this.model, { foreignKey: 'clienteId' });
    }
}

export default new Clientes().model
