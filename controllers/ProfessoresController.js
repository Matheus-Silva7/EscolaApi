const Professor = require("../model/ProfessoresModel");
const Departamento = require("../model/DepartamentosModel");

// Criar um novo professor
exports.criarProfessor = async (req, res) => {
  const { nome, cpf, endereco, telefone, email, departamentoId } = req.body;

  try {
    // Verifique se o departamento existe
    const departamento = await Departamento.findOne({ where: { id: departamentoId } });

    if (departamento) {
      // Crie um novo professor se o departamento existir
      const novoProfessor = await Professor.create({
        nome, cpf, endereco, telefone, email, departamentoId
      });

      res.status(201).json({ novoProfessor });
    } else {
      res.status(400).json({ message: "Departamento informado não existe!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar professor." });
  }
};

// Listar todos os professores
exports.todosProfessores = async (req, res) => {
  try {
    const professores = await Professor.findAll({});
    res.status(200).json({ professores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao listar professores." });
  }
};

// Atualizar um professor
exports.updateProfessor = async (req, res) => {
  const professorId = req.params.id;
  const { nome, cpf, endereco, telefone, email, departamentoId } = req.body;

  try {
    const [updated] = await Professor.update(
      { nome, cpf, endereco, telefone, email, departamentoId },
      { where: { id: professorId } }
    );

    if (updated) {
      const professorAtualizado = await Professor.findOne({ where: { id: professorId } });
      res.status(200).json({ professorAtualizado });
    } else {
      res.status(404).json({ message: "Professor não encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar professor." });
  }
};

// Deletar um professor
exports.deleteProfessor = async (req, res) => {
  const professorId = req.params.id;

  try {
    const deleteP = await Professor.destroy({ where: { id: professorId } });

    if (deleteP) {
      res.status(200).json({ message: "Professor excluído com sucesso." });
    } else {
      res.status(404).json({ message: "Professor não encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao excluir professor." });
  }
};

