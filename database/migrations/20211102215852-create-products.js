'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      sku: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};