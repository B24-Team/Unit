'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reports', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   participants_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'Participant',
    //       key: 'id'
    //     }
    //   },
    //   users_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'Conversation',
    //       key: 'creator_id'
    //     }
    //   },
    //   report_type: {
    //     type: Sequelize.STRING
    //   },
    //   notes: {
    //     type: Sequelize.TEXT
    //   },
    //   status: {
    //     type: Sequelize.ENUM('pending', 'resolved')
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
    return queryInterface.dropTable('Reports');
  }
};