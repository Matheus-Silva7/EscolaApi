const Sequelize = require("sequelize");
const database = require("../dbConnect");


const MatriculasSchema = database.define('matriculas', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  alunoId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'alunos', 
      key: 'id', 
  }
  },
  disciplinaId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'disciplinas', 
      key: 'id', 
  }
  },
  semestre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  notaFinal: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  presencas: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  faltas: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, { 
  timestamps: false 
});

module.exports = MatriculasSchema;