const Matriculas = require("../model/MatriculasModel");

const Disciplina = require("../model/DisciplinasModel");
const Aluno = require("../model/AlunosModel");



exports.criarMatricula = async (req, res) => {

  const { alunoId, disciplinaId, semestre, notaFinal, presencas, faltas } = req.body

  try {
    const aluno = await Aluno.findOne({
      where: { id: alunoId }
    })
    const disciplina = await Disciplina.findOne({
      where: { id: disciplinaId }
    })

    if (aluno && disciplina) {
      const novaMatricula = await Matriculas.create({
        alunoId, disciplinaId, semestre, notaFinal, presencas, faltas 
      })

      res.status(201).json({ novaMatricula })
    } else {
      res.status(400).json({ message: "Aluno ou disciplina informado não existe!" })
    }

  } catch (error) {
    console.log(error)
  }
}

exports.todasMatriculas= async (req, res) => {
  const matriculas = await Matriculas.findAll({});
  res.status(200).json({ matriculas });
};

exports.updateMatricula = async (req, res) => {
  const matriculaId = req.params.id;
  const { alunoId, disciplinaId, semestre, notaFinal, presencas, faltas  } = req.body

  const update = await Matriculas.update(
    {
      alunoId, disciplinaId, semestre, notaFinal, presencas, faltas 
    },
    {
      where: { id: matriculaId },
    }
  );

  const matriculaAtualizada = await Matriculas.findOne({
    where: { id: matriculaId }
  })
  res.status(200).json({ matriculaAtualizada })
};

exports.deleteMatricula = async (req, res) => {
  const matriculaId = req.params.id;
  const deleteM = await Matriculas.destroy({
    where: { id: matriculaId }
  });

  if (deleteM) {
    res.status(200).json({ message: "Matricula excluído com sucesso." });
  } else {
    res.status(404).json({ message: "Matricula não encontrado." });
  }
};