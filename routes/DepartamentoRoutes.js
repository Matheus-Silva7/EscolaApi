const express = require("express");
const router = express.Router();

const departamentoController = require("../controllers/DepartamentosController");

router.post("/criar", departamentoController.criarDepartamento);

router.get("/todos", departamentoController.todosDepartamentos);

router.patch("/update/:id", departamentoController.updateDepartamento);

/* router.delete("/delete", departamentoController.updateDepartamento); */

module.exports = router