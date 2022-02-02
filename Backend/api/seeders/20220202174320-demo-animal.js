'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Animais', [{
      nome: 'Mel',
      especie: 'gato',
      tutor:'Nicolas Martins',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Yummi',
      especie: 'gato',
      tutor:'Nicolas Martins',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Bob',
      especie: 'gato',
      tutor:'Nicolas Martins',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Valentina',
      especie: 'cachorro',
      tutor:'Debora Derica',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Didi',
      especie: 'passaro',
      tutor: 'Iulia Barros',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Dadari',
      especie: 'passaro',
      tutor: 'Iulia Barros',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Amora',
      especie: 'cachorro',
      tutor: 'Margarida Mizu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Mancinho',
      especie: 'cachorro',
      tutor: 'Mike tyson',
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ], {});
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Animais', null, {});

  }
};
