'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Attachments', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   messages_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'Contact',
    //       key: 'id'
    //     }
    //   },
    //   thumb_url: {
    //     type: Sequelize.STRING
    //   },
    //   file_url: {
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
    return queryInterface.dropTable('Attachments');
  }
};