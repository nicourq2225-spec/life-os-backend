'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Finanzas extends Model {
    static associate(models) {
      // asociaciones si las hubiera
    }
  }
  Finanzas.init({
    monto: DataTypes.DECIMAL,
    tipo: DataTypes.STRING,
    categoria: DataTypes.STRING,
    categoriaFinanzas: DataTypes.STRING, // NUEVA COLUMNA
    aplicacion: DataTypes.STRING,        // NUEVA COLUMNA
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Finanzas',
  });
  return Finanzas;
};