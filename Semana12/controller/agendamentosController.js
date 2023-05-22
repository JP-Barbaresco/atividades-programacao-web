const Agendamento = require("../model/agendamentoModel");

exports.list = async(_, res) => {
    Agendamento.findAll({
        order: [["id", "DESC"]],
    })
        .then((posts) => res.send(posts))
        .catch((error) => console.error(error))
};

exports.save = async (req, res) => {
    const { id_agendamento, id_paciente, id_profissional, id_consultorio, data_hora_inicio, data_hora_fim  } = req.body;

    Agendamento.create({
        id_agendamento,
        id_paciente,
        id_profissional,
        id_consultorio,
        data_hora_inicio,
        data_hora_fim,
    }).then((post) => res.send(post))
};

exports.getByID = async (req, res) => {
    const { id_agendamento } = req.params;

    try {
        const agendamento = await Agendamento.findByPK(id);
        if (!agendamento) {
            return res.status(404).send({ message: 'Agendamento não encntrado!' })
        }
        res.send(agendamento);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Erro interno do servidor' })
    }
};

exports.delete = async (req, res) => {
    const { id_agendamento } = req.params;

    try {
        const agendamento = await Agendamento.findByPK(id);
        if (!agendamento) {
            return res.status(404).send({ message: 'Agendamento not found!' })
        }
        await agendamento.destroy();
        res.send({ messafe: 'Agendamento deleted successfully '})
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' })
    }
};

exports.update = async (req, res) => {
    const { id_agendamento } = req.params;
    const { id_paciente, id_profissional, id_consultorio, data_hora_inicio, data_hora_fim } = req.body;

    try {
        let agendamento = await Agendamento.findByPK(id);
        if (!agendamento) {
            return res.status(404).send({ message: 'Dragão not found!' })
        }

        agendamento.nome_agendamento = nome_agendamento;
        agendamento.id_paciente = id_paciente;
        agendamento.id_profissional = id_profissional;
        agendamento.id_consultorio = id_consultorio;
        agendamento.data_hora_inicio = data_hora_inicio;
        agendamento.data_hora_fim = data_hora_fim;

        await agendamento.save();

        res.send(agendamento)
    } catch(error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' })
    }
};