'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Deleted_conversations', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   conversation_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'Conversation',
    //       key: 'id'
    //     }
    //   },
    //   users_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'Message',
    //       key: 'sender_id'
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
    return queryInterface.dropTable('Deleted_conversations');
  }
};