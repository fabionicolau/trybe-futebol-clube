import { Model, INTEGER } from 'sequelize';
import db from '.';
import Teams from './Teams';

class Matches extends Model {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: number;
}

Matches.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'Matches',
  tableName: 'matches',
});

Matches.belongsTo(Teams, { foreignKey: 'homeTeam', targetKey: 'id' as 'homeTeam' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeam', targetKey: 'id' as 'awayTeam' });

export default Matches;
