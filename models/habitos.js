'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Habitos extends Model {
    static associate(models) {}
  }
  Habitos.init({
    diaCiclo: DataTypes.INTEGER,
    fuerza: DataTypes.BOOLEAN,
    nutricion: DataTypes.BOOLEAN,
    abstinencia: DataTypes.BOOLEAN,
    auditoria: DataTypes.BOOLEAN,
    estudio: DataTypes.BOOLEAN,
    fecha: DataTypes.DATEONLY // NUEVA COLUMNA HISTÓRICA
  }, {
    sequelize,
    modelName: 'Habitos',
  });
  return Habitos;
};