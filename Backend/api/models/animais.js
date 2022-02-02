'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Animais.belongsTo(models.Pessoas)
    }
  }
  Animais.init({
    nome: DataTypes.STRING,
    especie: DataTypes.STRING,
    tutor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Animais',
  });
  return Animais;
};