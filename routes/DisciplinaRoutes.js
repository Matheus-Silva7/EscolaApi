const express = require("express");
const router = express.Router();
const disciplinaController = require("../controllers/DiscliplinasController")

router.post("/criar", disciplinaController.criarDisciplina);
router.get("/todos", disciplinaController.todasDisciplinas);
router.patch("/update/:id", disciplinaController.updateDisciplina);
router.delete("/delete/:id", disciplinaController.deleteDisciplina);

module.exports = router