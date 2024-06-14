const express = require("express");
const router = express.Router();
const disciplinaController = require("../controllers/DiscliplinasController")

router.post("/criar", disciplinaController.criarDisciplina);
router.get("/", disciplinaController.todasDisciplinas);
router.get("/:id", disciplinaController.buscarDisciplinaPorId);
router.patch("/update/:id", disciplinaController.updateDisciplina);
router.delete("/delete/:id", disciplinaController.deleteDisciplina);

module.exports = router