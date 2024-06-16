const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors()); 
//poder enviar json
app.use(express.json());

(async () => {
  const database = require("./dbConnect")
  await database.sync()
})();


const cursoRoutes = require("./routes/CursoRoutes");
const disciplinaRoutes = require("./routes/DisciplinaRoutes");
const alunosRoutes = require("./routes/AlunoRoutes");
const matriculaRoutes = require("./routes/MatriculaRoutes");
const professorRoutes = require("./routes/ProfessorRoutes");
const professorDisciplinaRoutes = require("./routes/ProfessorDisciplina");

app.use('/cursos', cursoRoutes)
app.use('/professores', professorRoutes)
app.use('/disciplinas', disciplinaRoutes) 
app.use('/alunos', alunosRoutes)
app.use('/matriculas', matriculaRoutes)
app.use('/profDisciplina', professorDisciplinaRoutes)
 
app.listen(port, () => {
  console.log("Servidor online...")
});