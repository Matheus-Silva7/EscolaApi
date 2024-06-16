const Aluno = require("../model/AlunosModel");
const Curso = require("../model/CursosModel");


exports.criarAluno= async (req, res) => {

  const { nome, numero, cpf, rg, enderecoAtual, telefone, enderecoPermanente, email, dataNascimento, sexo, cursoId } = req.body

  try {

    const rgExist = await Aluno.findOne({
      where: { rg: rg }
    })
    const cpfExist = await Aluno.findOne({
      where: { cpf: cpf }
    })
    const numeroExist = await Aluno.findOne({
      where: { numero: numero }
    })

    if(!rgExist && !cpfExist && !numeroExist){
      
      const curso = await Curso.findOne({
        where: { id: cursoId }
      })

  
      if (curso) {
        const novoAluno = await Aluno.create({
          nome, numero, cpf, rg, enderecoAtual, telefone, enderecoPermanente, email, dataNascimento, sexo, cursoId
        })
  
        res.status(201).json({ novoAluno })
      } else {
        res.status(500).json({ message: "Curso informado não existe!" })
      }
    } else{
      res.status(500).json({ message: "Rg, Cpf ou numero já cadastrados na base de dados!" })
    }


  } catch (error) {
    console.log(error)
  }
}

exports.todosAlunos = async (req, res) => {
  const alunos = await Aluno.findAll({});
  res.status(200).json({ alunos });
};

exports.alunosPorId = async (req, res) =>{
  const alunoId = req.params.id
  try {
    const aluno = await Aluno.findOne({
      where: { id: alunoId },
      include: [Curso]  
    });

    if (aluno) {
      res.status(200).json({ aluno });
    } else {
      res.status(404).json({ message: "Aluno não encontrado." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar aluno." });
  }
};

exports.updateAlunos = async (req, res) => {
  const alunoId = req.params.id;
  const { nome, numero, cpf, rg, enderecoAtual, telefone, enderecoPermanente, email, dataNascimento, sexo, cursoId } = req.body

  const update = await Aluno.update(
    {
      nome, numero, cpf, rg, enderecoAtual, telefone, enderecoPermanente, email, dataNascimento, sexo, cursoId
    },
    {
      where: { id: alunoId },
    }
  );

  const alunoAtualizado = await Aluno.findOne({
    where: { id: alunoId }
  })
  res.status(200).json({ alunoAtualizado })
};

exports.deleteAluno = async (req, res) => {
  const alunoId = req.params.id;
  const deleteA = await Aluno.destroy({
    where: { id: alunoId }
  });

  if (deleteA) {
    res.status(200).json({ message: "Aluno excluído com sucesso." });
  } else {
    res.status(404).json({ message: "Aluno não encontrado." });
  }
};
