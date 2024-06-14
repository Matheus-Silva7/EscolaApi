const ProfessoresDisciplinas = require("../model/ProfessoresDisciplinasModel"); 
const Professor = require('../model/ProfessoresModel');
const Disciplina = require('../model/DisciplinasModel');

// Criar uma nova associação entre um professor e uma disciplina
exports.addProfessorDisciplina = async (req, res) => {
    try {
        const { professor_id, disciplina_id } = req.body;
        const association = await ProfessoresDisciplinas.create({ professor_id, disciplina_id });
        res.status(201).json(association);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Listar todas as associações entre professores e disciplinas
exports.getAllProfessoresDisciplinas = async (req, res) => {
    try {
        const associations = await ProfessoresDisciplinas.findAll({
            include: [
                { model: Professor, attributes: ['id', 'nome'] },
                { model: Disciplina, attributes: ['id', 'nome'] }
            ]
        });
        res.status(200).json(associations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Listar todas as disciplinas de um professor específico
exports.getDisciplinasByProfessor = async (req, res) => {
    try {
        const { professor_id } = req.params;
        const professor = await Professor.findByPk(professor_id, {
            include: Disciplina
        });
        if (!professor) {
            return res.status(404).json({ error: 'Professor não encontrado' });
        }
        res.status(200).json(professor.Disciplinas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Listar todos os professores de uma disciplina específica
exports.getProfessoresByDisciplina = async (req, res) => {
    try {
        const { disciplina_id } = req.params;
        const disciplina = await Disciplina.findByPk(disciplina_id, {
            include: Professor
        });
        if (!disciplina) {
            return res.status(404).json({ error: 'Disciplina não encontrada' });
        }
        res.status(200).json(disciplina.Professores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Remover uma associação entre um professor e uma disciplina
exports.deleteProfessorDisciplina = async (req, res) => {
    try {
        const { professor_id, disciplina_id } = req.params;
        const result = await ProfessoresDisciplinas.destroy({
            where: { professor_id, disciplina_id }
        });
        if (result === 0) {
            return res.status(404).json({ error: 'Associação não encontrada' });
        }
        res.status(200).json({ message: 'Associação removida com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};