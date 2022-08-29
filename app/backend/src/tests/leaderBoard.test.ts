import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';

import { Response } from 'superagent';
import {  leaderBoardMock, homeLeaderBoardMock, awayLeaderBoardMock } from './Mocks/leaderBoardMock';
import { IHomeMatches } from '../interfaces/leaderBoardInterface';

chai.use(chaiHttp);

const { expect } = chai;

describe('Ao buscar pela talbela dos times', () => { 
  let chaiHttpResponse: Response;
 
  afterEach(()=>{
    sinon.restore();
  })
 
  it('Retorna a tabela referente à todos os jogos', async () => {
    sinon.stub(Matches, 'findAll').resolves(leaderBoardMock as unknown as Matches[])
 
    chaiHttpResponse = await chai
      .request(app)
      .get('/leaderboard')
 
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(leaderBoardMock);
  })

  it('Retorna a tabela referente aos jogos como mandante', async () => {
    sinon.stub(Matches, 'findAll').resolves(homeLeaderBoardMock as unknown as Matches[])

    chaiHttpResponse = await chai
      .request(app)
      .get('/leaderboard/home')
 
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(homeLeaderBoardMock);
  })

  it('Retorna a tabela referente aos jogos como visitante',async () => {
    sinon.stub(Matches, 'findAll').resolves(awayLeaderBoardMock as unknown as Matches[])

    chaiHttpResponse = await chai
      .request(app)
      .get('/leaderboard/away')

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(awayLeaderBoardMock);
  });
})
