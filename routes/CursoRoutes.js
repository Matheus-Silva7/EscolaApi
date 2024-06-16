const express = require("express");
const router = express.Router();
const cursoController = require("../controllers/CursosController")

router.post("/criar", cursoController.criarCurso);
router.get("/", cursoController.todosCursos);
router.get("/:id", cursoController.buscarCursoPorId);
router.get("nivel/:nivel", cursoController.buscarCursosPorNivel);
router.patch("/update/:id", cursoController.updateCurso);
router.delete("/delete/:id", cursoController.deleteCurso);

module.exports = router