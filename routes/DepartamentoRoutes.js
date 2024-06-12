const express = require("express");
const router = express.Router();

const departamentoController = require("../controllers/DepartamentosController");

router.post("/create", departamentoController.criarDepartamento);

module.exports = router