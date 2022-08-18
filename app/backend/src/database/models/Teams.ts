import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Teams extends Model {
  id?: number;
  teamName: string;
}

Teams.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'Teams',
  tableName: 'teams',
});

export default Teams;
