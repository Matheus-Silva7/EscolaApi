const Sequelize = require("sequelize");
const database = require("../dbConnect");
const Professor = require("./ProfessoresModel");
const Disciplina = require("./DisciplinasModel");

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
            key: 'id'
        }
    },
    disciplinaId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'disciplinas', 
            key: 'id'
        }
    }
}, {
    timestamps: false
});

Professor.hasMany(ProfessoresDisciplinasSchema, { foreignKey: 'id' });
Disciplina.hasMany(ProfessoresDisciplinasSchema, { foreignKey: 'id' });

module.exports = ProfessoresDisciplinasSchema;
