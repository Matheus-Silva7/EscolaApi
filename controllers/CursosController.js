const Curso = require("../model/CursosModel");
const Departamento = require("../model/DepartamentosModel")

exports.criarCurso = async (req, res) => {

    const { nome, descricao, numero, cargaHorariaPorSemestre, cargaHorariaTotal, numeroSemestres, nivel, departamentoId } = req.body

    try {
        const numeroExist = await Curso.findOne({
            where: { numero: numero }
        })
        if (!numeroExist) {
            const departamento = await Departamento.findOne({
                where: { id: departamentoId }
            })
            if (departamento) {
                const novoCurso = await Curso.create({
                    nome,
                    descricao,
                    numero,
                    cargaHorariaPorSemestre,
                    cargaHorariaTotal,
                    numeroSemestres, 
                    nivel,
                    departamentoId
                })

                res.status(201).json({ novoCurso })
            } else {
                res.status(500).json({ message: "Departamento informado não existe!" })
            }
        } else{
            res.status(500).json({ message: "numero do curso já cadastrado na base de dados!"})
        }

    } catch (error) {
        console.log(error)
    }
}

exports.todosCursos = async (req, res) => {
    const cursos = await Curso.findAll({});
    res.status(200).json({ cursos });
};

exports.updateCurso = async (req, res) => {
    const cursoId = req.params.id;
    const { nome, descricao, numero, cargaHorariaPorSemestre, cargaHorariaTotal, nivel, departamentoId } = req.body

    const update = await Curso.update(
        {
            nome,
            descricao,
            numero,
            cargaHorariaPorSemestre,
            cargaHorariaTotal,
            nivel,
            departamentoId
        },
        {
            where: { id: cursoId },
        }
    );

    const cursoAtualizado = await Curso.findOne({
        where: { id: cursoId }
    })
    res.status(200).json({ cursoAtualizado })
};

exports.deleteCurso = async (req, res) => {
    const cursoId = req.params.id;
    const deleteC = await Curso.destroy({
        where: { id: cursoId }
    });

    if (deleteC) {
        res.status(200).json({ message: "Curso excluído com sucesso." });
    } else {
        res.status(404).json({ message: "Curso não encontrado." });
    }
}