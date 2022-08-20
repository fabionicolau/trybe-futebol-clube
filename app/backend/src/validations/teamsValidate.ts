import Teams from '../database/models/Teams';

interface Iteams {
  homeTeam: number;
  awayTeam: number;
}
const teamsExistAndAreDifferent = async (data: Iteams) => {
  const homeTeam = await Teams.findOne({ where: { id: data.homeTeam } });
  const awayTeam = await Teams.findOne({ where: { id: data.awayTeam } });

  if (!homeTeam || !awayTeam) {
    const error = new Error('There is no team with such id!');
    error.name = 'notFound';
    throw error;
  }

  if (data.homeTeam === data.awayTeam) {
    const error = new Error('It is not possible to create a match with two equal teams');
    error.name = 'unauthorized';
    throw error;
  }
};

export default teamsExistAndAreDifferent;
