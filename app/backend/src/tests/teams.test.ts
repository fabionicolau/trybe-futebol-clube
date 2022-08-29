import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/Teams';

import { Response } from 'superagent';
import {  allTeamsMock, teamByIdMock  } from './Mocks/teamsMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Ao buscar pelos times', () => { 
  let chaiHttpResponse: Response;

  afterEach(()=>{
    sinon.restore();
  })
 
  it('Retorna todos os times quando inseridos dados corretos', async () => {
    sinon.stub(Teams, "findAll").resolves(allTeamsMock as Teams[])

    chaiHttpResponse = await chai
      .request(app)
      .get('/teams')
 
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(allTeamsMock);
  })

  it('Retorna apenas um time quando buscado pelo id', async () => {
    sinon.stub(Teams, "findOne").resolves(teamByIdMock as Teams)
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams/1')
 
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(teamByIdMock);
  })

  it('Retorna o erro caso o time não seja encontrado',async () => {
    sinon.stub(Teams, "findOne").resolves()
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams/999')

    expect(chaiHttpResponse.status).to.equal(404);
    expect(chaiHttpResponse.body.message).to.be.equal('Team not found');
  });
})
