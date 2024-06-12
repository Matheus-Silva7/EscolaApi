const Departamento = require("../model/DepartamentosModel");

exports.criarDepartamento = async (req, res) =>{

  const nome = req.body.nome
  const sigla = req.body.sigla
  const codigo = req.body.codigo
  const endereco = req.body.endereco
  const telefone = req.body.telefone


  const novoDepartamento = await Departamento.create({
    nome,
    sigla,
    codigo,
    endereco,
    telefone
  })
}