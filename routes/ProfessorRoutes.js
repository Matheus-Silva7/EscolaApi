const express = require("express")
const router = express.Router()
const professorController = require("../controllers/ProfessoresController")

router.post("/criar", professorController.criarProfessor);
router.get("/", professorController.todosProfessores);
router.patch("/update/:id", professorController.updateProfessor);
router.delete("/delete/:id", professorController.deleteProfessor);

module.exports = router