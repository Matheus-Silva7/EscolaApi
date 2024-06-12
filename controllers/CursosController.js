const Curso = require("../model/CursosModel");

exports.criarCurso = async (req, res) =>{
    const nome = req.body.nome
    const descricao = req.body.descricao
    const numero = req.body.numero
    const cargaHorariaPorSemestre = req.body.cargaHorariaPorSemestre
    const cargaHorariaTotal = req.body.cargaHorariaTotal
    const nivel = req.body.nivel
    const departamentoId = req.body.departamentoId

    const novoCurso =  await Curso.create({
        nome,
        descricao,
        numero,
        cargaHorariaPorSemestre,
        cargaHorariaTotal,
        nivel,
        departamentoId
    })
}