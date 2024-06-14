const Sequelize = require("sequelize");
const database = require("../dbConnect");
const Professor = require("./ProfessoresModel")
const Disciplina = require("./DisciplinasModel")


const ProfessoresDisciplinasSchema = database.define('professoresDisciplinas', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  professorId: {
    type: Sequelize.INTEGER,
    references: {
      model: Professor, 
      key: 'id', 
  }
  },
  disciplinaId: {
    type: Sequelize.INTEGER,
    references: {
      model: Disciplina, 
      key: 'id', 
  }
  }
}, {
  timestamps: false 
});

module.exports = ProfessoresDisciplinasSchema;