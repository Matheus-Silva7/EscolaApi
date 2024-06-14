const Sequelize = require("sequelize");
const database = require("../dbConnect");


const CursosSchema = database.define('cursos', {
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
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cargaHorariaPorSemestre: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cargaHorariaTotal: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  numeroSemestres: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  nivel: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  timestamps: false 
});

module.exports = CursosSchema;