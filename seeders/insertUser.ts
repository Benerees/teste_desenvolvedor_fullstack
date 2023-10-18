module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [
      {
        id: '1',
        name: 'teste',
        password: 'teste',
        email: 'teste@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        name: 'Nome do Usuário',
        password: 'Senha do Usuário',
        email: 'email@exemplo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Adicione mais objetos de usuário conforme necessário
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  },
};