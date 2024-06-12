const Sequelize = require("sequelize");
const database = require("../dbConnect");


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
      model: 'professores', 
      key: 'id', 
  }
  },
  disciplinaId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'disciplinas', 
      key: 'id', 
  }
  }
}, {
  timestamps: false 
});

module.exports = ProfessoresDisciplinasSchema;