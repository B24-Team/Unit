'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_verificstions', {
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
    //   verification_code: {
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
    return queryInterface.dropTable('User_verificstions');
  }
};