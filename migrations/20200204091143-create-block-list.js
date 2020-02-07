'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Block_lists', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   participants_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'Access',
    //       key: 'participants_id'
    //     }
    //   },
    //   users_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'Access',
    //       key: 'users_id'
    //     }
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Block_lists');
  }
};