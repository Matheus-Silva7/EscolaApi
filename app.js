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

app.use('/departamento', departamentoRoutes)

app.listen(port, () => {
  console.log("Servidor online...")
})