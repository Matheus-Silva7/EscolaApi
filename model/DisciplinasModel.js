const Sequelize = require("sequelize");
const database = require("../dbConnect");


const DisciplinasSchema = database.define('disciplinas', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  codigo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cargaHoraria: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cursoId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'cursos', 
      key: 'id', 
  }
  },
}, {
  timestamps: false 
});

module.exports = DisciplinasSchema;