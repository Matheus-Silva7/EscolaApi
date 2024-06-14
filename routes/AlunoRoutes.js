const express = require("express");
const router = express.Router();
const alunoController = require("../controllers/AlunosController")

router.post("/criar", alunoController.criarAluno);
router.get("/", alunoController.todosAlunos);
router.get("/:id", alunoController.alunosPorId);
router.patch("/update/:id", alunoController.updateAlunos);
router.delete("/delete/:id", alunoController.deleteAluno);

module.exports = router