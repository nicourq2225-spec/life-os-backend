'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AhorroMoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AhorroMoto.init({
    capitalInicial: DataTypes.DECIMAL,
    tasaInteresMensual: DataTypes.DECIMAL,
    fechaInicio: DataTypes.DATE,
    fechaVencimiento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AhorroMoto',
  });
  return AhorroMoto;
};