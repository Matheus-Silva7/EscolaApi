const express = require("express");
const router = express.Router();

const departamentoController = require("../controllers/DepartamentosController");

router.post("/criar", departamentoController.criarDepartamento);

router.get("/", departamentoController.todosDepartamentos);

router.patch("/update/:id", departamentoController.updateDepartamento);

router.delete("/delete/:id", departamentoController.deleteDepartamento);

module.exports = router