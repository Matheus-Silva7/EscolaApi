const Professor = require("../model/ProfessoresModel");

// Criar um novo professor
exports.criarProfessor = async (req, res) => {
  const { nome, cpf, endereco, telefone, email } = req.body;

  try {

    const cpfExist = await Professor.findOne({ where: { cpf: cpf } });
    if (!cpfExist) {
      
        const novoProfessor = await Professor.create({
          nome, cpf, endereco, telefone, email,
        });

        res.status(201).json({ novoProfessor });
    
    } else {
      res.status(500).json({ message: "Cpf já cadastrado na base de dados!" })
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

exports.buscarProfessorPorId = async (req, res) => {
  const professorId = req.params.id;

  try {
    const professor = await Professor.findOne({
      where: { id: professorId }
    });

    if (professor) {
      res.status(200).json({ professor });
    } else {
      res.status(404).json({ message: "Professor não encontrado." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar professor." });
  }
};

// Atualizar um professor
exports.updateProfessor = async (req, res) => {
  const professorId = req.params.id;
  const { nome, cpf, endereco, telefone, email } = req.body;

  try {
    const [updated] = await Professor.update(
      { nome, cpf, endereco, telefone, email },
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

