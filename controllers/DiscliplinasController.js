const Disciplina = require("../model/DisciplinasModel");
const Curso = require("../model/CursosModel");


exports.criarDisciplina = async (req, res) => {

  const { nome, codigo, descricao, cargaHoraria, cursoId } = req.body

  try {
    const curso = await Curso.findOne({
      where: { id: cursoId }
    })

    if (curso) {
      const novaDisciplina = await Disciplina.create({
        nome, codigo, descricao, cargaHoraria, cursoId 
      })

      res.status(201).json({ novaDisciplina })
    } else {
      res.status(400).json({ message: "Curso informado não existe!" })
    }

  } catch (error) {
    console.log(error)
  }
}

exports.todasDisciplinas = async (req, res) => {
  const disciplinas = await Disciplina.findAll({});
  res.status(200).json({ disciplinas });
};

exports.updateDisciplina = async (req, res) => {
  const disciplinaId = req.params.id;
  const { nome, codigo, descricao, cargaHoraria, cursoId  } = req.body

  const update = await Curso.update(
    {
      nome, codigo, descricao, cargaHoraria, cursoId 
    },
    {
      where: { id: disciplinaId },
    }
  );

  const disciplinaAtualizada = await Curso.findOne({
    where: { id: disciplinaId }
  })
  res.status(200).json({ disciplinaAtualizada })
};

exports.deleteDisciplina = async (req, res) => {
  const disciplinaId = req.params.id;
  const deleteD = await Curso.destroy({
    where: { id: disciplinaId }
  });

  if (deleteD) {
    res.status(200).json({ message: "Disciplina excluído com sucesso." });
  } else {
    res.status(404).json({ message: "Disciplina não encontrado." });
  }
};