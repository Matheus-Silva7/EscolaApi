const Departamento = require("../model/DepartamentosModel");

exports.criarDepartamento = async (req, res) => {
  try {

    const { nome, sigla, codigo, endereco, telefone } = req.body;

    const nomeExist = await Departamento.findOne({
      where: { nome: nome }
    })
    const siglaExist = await Departamento.findOne({
      where: { sigla: sigla }
    })
    const codigoExist = await Departamento.findOne({
      where: { codigo: codigo }
    })

    if (!nomeExist && !siglaExist && !codigoExist){
      const novoDepartamento = await Departamento.create({
        nome,
        sigla,
        codigo,
        endereco,
        telefone,
      });
  
      res.status(201).json({ novoDepartamento });
    } else{
      res.status(500).json({ message: "Nome ou sigla ou codigo já cadastrados na base de dados!" })
    }

   
  } catch (error) {
    console.log(error);
  }
};

exports.todosDepartamentos = async (req, res) => {
  const departamentos = await Departamento.findAll({});
  res.status(200).json({ departamentos });
};

exports.updateDepartamento = async (req, res) => {
  const departamentoId = req.params.id;
  const { nome, sigla, codigo, endereco, telefone } = req.body;
  const update = await Departamento.update(
    {
      nome,
      sigla,
      codigo,
      endereco,
      telefone,
    },
    {
      where: { id: departamentoId },
    }
  );

  const departamentoAtualizado = await Departamento.findOne({
    where:{id: departamentoId}
  })

res.status(200).json({departamentoAtualizado})

};

exports.deleteDepartamento = async (req, res) => {
  const departamentoId = req.params.id;
  const deleteD = await Departamento.destroy({
    where: { id: departamentoId }
  });

  if (deleteD) {
    res.status(200).json({ message: "Departamento excluído com sucesso." });
  } else {
    res.status(404).json({ message: "Departamento não encontrado." });
  }
}

