const Curso = require("../model/CursosModel");
const Aluno = require("../model/AlunosModel");

exports.criarCurso = async (req, res) => {

    const { nome, descricao, numero, cargaHorariaPorSemestre, cargaHorariaTotal, numeroSemestres, nivel } = req.body

    try {
        const numeroExist = await Curso.findOne({
            where: { numero: numero }
        })
        if (!numeroExist) {
          
                const novoCurso = await Curso.create({
                    nome,
                    descricao,
                    numero,
                    cargaHorariaPorSemestre,
                    cargaHorariaTotal,
                    numeroSemestres, 
                    nivel
                })

                res.status(201).json({ novoCurso })
            
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

exports.buscarCursoPorId = async (req, res) => {
    const cursoId = req.params.id;
  
    try {
      const curso = await Curso.findOne({
        where: { id: cursoId }
      });
  
      if (curso) {
        res.status(200).json({ curso });
      } else {
        res.status(404).json({ message: "Curso não encontrado." });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao buscar curso." });
    }
  };

  exports.buscarCursosPorNivel = async (req, res) => {
    const nivel = req.params.nivel;
  
    try {
      const cursos = await Curso.findAll({
        where: { nivel: nivel }
      });
  
      if (cursos.length > 0) {
        res.status(200).json({ cursos });
      } else {
        res.status(404).json({ message: "Nenhum curso encontrado para o nível especificado." });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao buscar cursos." });
    }
  };
  
  
exports.updateCurso = async (req, res) => {
    const cursoId = req.params.id;
    const { nome, descricao, numero, cargaHorariaPorSemestre, cargaHorariaTotal, nivel } = req.body

    const update = await Curso.update(
        {
            nome,
            descricao,
            numero,
            cargaHorariaPorSemestre,
            cargaHorariaTotal,
            nivel
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