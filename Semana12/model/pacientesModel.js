const Sequelize = require("sequelize");
const sequelize = require("../config/connect");

const Paciente = sequielize.define("paciente", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true,
    },
    nome_paciente:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_nascimento:{
        type: Sequelize.DATE,
        allowNull: true,
    },
    numero_convenio:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})

sequelize
    .sync({force: false})
    .then(() => console.log("Tabela paciente cirada com sucesso"))
    .catch((error) => console.log("Erro ao criar a tabela Paciente", error));

module.exports = Paciente;