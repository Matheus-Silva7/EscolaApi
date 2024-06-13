const express = require("express");
const app = express();
const port = 3000;

//poder enviar json
app.use(express.json());

(async () => {
  const database = require("./dbConnect")
  await database.sync()
})();

const departamentoRoutes = require("./routes/DepartamentoRoutes");
const cursoRoutes = require("./routes/CursoRoutes");
const disciplinaRoutes = require("./routes/DisciplinaRoutes");
const alunosRoutes = require("./routes/AlunoRoutes");
const matriculaRoutes = require("./routes/MatriculaRoutes");
const professoreRoutes = require("./routes/ProfessorRoutes");

app.use('/departamentos', departamentoRoutes)
app.use('/cursos', cursoRoutes)
app.use('/professores', professoreRoutes)
app.use('/disciplinas', disciplinaRoutes)
app.use('/alunos', alunosRoutes)
app.use('/matriculas', matriculaRoutes)

app.listen(port, () => {
  console.log("Servidor online...")
});