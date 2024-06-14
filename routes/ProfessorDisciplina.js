const express = require('express');
const router = express.Router();
const professoresDisciplinasController = require('../controllers/ProfessoresDisciplinasController');

// Adicionar uma nova associação entre professor e disciplina
router.post('/', professoresDisciplinasController.addProfessorDisciplina);

// Listar todas as associações entre professores e disciplinas
router.get('/', professoresDisciplinasController.getAllProfessoresDisciplinas);

// Listar todas as disciplinas de um professor específico
router.get('/professor/:professor_id', professoresDisciplinasController.getDisciplinasByProfessor);

// Listar todos os professores de uma disciplina específica
router.get('/disciplina/:disciplina_id', professoresDisciplinasController.getProfessoresByDisciplina);

// Remover uma associação entre professor e disciplina
router.delete('/:professor_id/:disciplina_id', professoresDisciplinasController.deleteProfessorDisciplina);

module.exports = router;