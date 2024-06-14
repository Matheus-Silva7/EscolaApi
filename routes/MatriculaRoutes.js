const express = require("express");
const router = express.Router();
const matriculaController = require("../controllers/MatriculasController")

router.post("/criar", matriculaController.criarMatricula);
router.get("/", matriculaController.todasMatriculas);
router.patch("/update/:id", matriculaController.updateMatricula);
router.delete("/delete/:id", matriculaController.deleteMatricula);

module.exports = router