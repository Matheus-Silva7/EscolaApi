const Sequelize = require("sequelize");
const database = require("../dbConnect");


const AlunosSchema = database.define('alunos', {
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
  numero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  enderecoAtual: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  enderecoPermanente: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dataNascimento: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  sexo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cursoId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'cursos', 
      key: 'id', 
  }
  },
  departamentoId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'departamentos', 
      key: 'id', 
  }
  },
}, {
  timestamps: false 
});

module.exports = AlunosSchema;