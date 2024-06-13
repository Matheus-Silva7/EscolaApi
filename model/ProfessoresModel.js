const Sequelize = require("sequelize");
const database = require("../dbConnect");
const Departamento = require("./DepartamentosModel");

const ProfessoresSchema = database.define('professores', {
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
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  departamentoId: {
    type: Sequelize.INTEGER,
    references: {
      model: Departamento,
      key: 'id',
    }
  },
}, {
  timestamps: false 
});

module.exports = ProfessoresSchema;
