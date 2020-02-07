'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Devices', {
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
    //   device_id: {
    //     type: Sequelize.STRING
    //   },
    //   type: {
    //     type: Sequelize.ENUM('APPLE')
    //   },
    //   device_token: {
    //     type: Sequelize.STRING
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
    return queryInterface.dropTable('Devices');
  }
};