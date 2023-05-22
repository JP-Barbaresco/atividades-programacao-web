const express = require("express");
const router = express.Router();

// Capturing requests from controller
const pacientesController = require("../controller/pacientesController");
const pacientes = require("../model/pacientesModel");
const agendamentosController = requiere("../controller/agendamentoController");
const agendamentos = require("../model/agendamentoModel")

// Creantig the user main route
router
    .route("/pacientes")
    .post((req, res) => pacientesController.save(req, res))

// Route to get a user by ID
router
    .route("pacientes/:id")
    .put((req, res) => pacientesController.update(req, res))
    .delete((req, res) => pacientesController.delete(req, res));


    router
    .route("/agendamentos")
    .post((req, res) => agendamentosController.save(req, res))
    .post((req, res) => agendamentosController.list(req, res));

// Route to get a user by ID
router
    .route("agendamentos/:id")
    .get((req, res) => agendamentosController.getById(req, res))
    .put((req, res) => agendamentosController.update(req, res))
    .delete((req, res) => agendamentosController.delete(req, res));



module.exports = router;