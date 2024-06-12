const Sequelize = require("sequelize");
const database = require("../dbConnect")

const DepartamentosSchema = database.define('departamentos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  sigla:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  codigo:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone:{
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  timestamps: false 
});

module.exports = DepartamentosSchema;