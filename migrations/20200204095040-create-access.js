'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Accesses', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   users_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'User',
    //       key: 'id'
    //     }
    //   },
    //   devices_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'Device',
    //       key: 'id'
    //     }
    //   },
    //   token: {
    //     type: Sequelize.STRING
    //   },
    //   deleted_at: {
    //     type: Sequelize.DATE
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
    return queryInterface.dropTable('Accesses');
  }
};