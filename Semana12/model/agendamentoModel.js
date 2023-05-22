const Sequelize = require("sequelize");
const sequelize = require("../config/connect");

const Agendamento = sequielize.define("agendamento", {
    id_agendamento:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    id_paciente:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_profissional:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_consultorio:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_hora_inicio:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    data_hora_fim:{
        type: Sequelize.DATE,
        allowNull: false,
    }
})

sequelize
    .sync({force: false})
    .then(() => console.log("Tabela agendamentos cirada com sucesso"))
    .catch((error) => console.log("Erro ao criar a tabela Agendamentos", error));

module.exports = Agendamento;