'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Pessoas', [{
        nome: 'John Doe',
        idade: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ana Julia',
        idade: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Nicolas Martins',
        idade: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Debora Derica',
        idade: 66,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Iulia Barros',
        idade: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Joaniecio Pedra',
        idade: 78,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Margarida Mizu',
        idade: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mike tyson',
        idade: 89,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});
  }
};
