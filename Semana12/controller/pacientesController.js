const Paciente = require("../model/pacientesModel");

exports.list = async(_, res) => {
    Paciente.findAll({
        order: [["id", "DESC"]],
    })
        .then((posts) => res.send(posts))
        .catch((error) => console.error(error))
};

exports.save = async (req, res) => {
    const { cpf, nome_paciente, data_nascimento, numero_convenio} = req.body;

    Pessoa.create({
        cpf,
        nome_paciente,
        data_nascimento,
        numero_convenio,
    }).then((post) => res.send(post))
};

exports.delete = async (req, res) => {
    const { cpf } = req.params;

    try {
        const paciente = await Paciente.findByPK(id);
        if (!paciente) {
            return res.status(404).send({ message: 'Paciente não encontrado!' })
        }
        await paciente.destroy();
        res.send({ messafe: 'Paciente deletado com sucesso!'})
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Erro interno do servidor!' })
    }
};

exports.update = async (req, res) => {
    const { cpf } = req.params;
    const { nome_paciente, data_nascimento, numero_convenio} = req.body;

    try {
        let paciente = await Paciente.findByPK(id);
        if (!paciente) {
            return res.status(404).send({ message: 'Paciente não encontrado!' })
        }

        paciente.nome_paciente = nome_paciente;
        paciente.data_nascimento = data_nascimento;
        paciente.numero_convenio = numero_convenio;

        await paciente.save();

        res.send(paciente)
    } catch(error) {
        console.error(error);
        res.status(500).send({ message: 'Erro interno do servidor' })
    }
};
