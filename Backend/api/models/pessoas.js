'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Pessoas.hasMany(models.Animais)
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    idade: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  return Pessoas;
};