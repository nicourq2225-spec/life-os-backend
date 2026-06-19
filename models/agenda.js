'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Agenda extends Model { static associate(models) {} }
  Agenda.init({
    diaCiclo: DataTypes.INTEGER,
    horaInicio: DataTypes.STRING,
    horaFin: DataTypes.STRING,
    titulo: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, { sequelize, modelName: 'Agenda' });
  return Agenda;
};