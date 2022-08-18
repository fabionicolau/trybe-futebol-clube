'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      home_team: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'teams',
          key: 'id',
        },
      },
      home_team_goals: {
        type: Sequelize.INTEGER,
      },
      away_team: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'teams',
          key: 'id',
        },
      },
      away_team_goals: {
        type: Sequelize.INTEGER,
      },
      in_progress: {
        type: Sequelize.INTEGER,
      },     
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('matches');
  }
};
