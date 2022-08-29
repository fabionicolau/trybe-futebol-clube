import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/Matches';

import { Response } from 'superagent';
import {matchesMock, inProgressMatchesMock, FinishedMatchesMock } from './Mocks/matchesMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Ao buscar pelas partidas', () => { 
  let chaiHttpResponse: Response;

  afterEach(()=>{
    sinon.restore();
  })
 
  it('Retorna todas as partidas quando inseridos dados corretos', async () => {
    sinon.stub(Matches, "findAll").resolves(matchesMock as unknown as Matches[]);
    chaiHttpResponse = await chai
      .request(app)
      .get('/matches')
 
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(matchesMock);
  })

  it('Retorna todas as partidas em andamento', async () => {
    sinon.stub(Matches, "findAll").resolves(inProgressMatchesMock as unknown as Matches[]);
    chaiHttpResponse = await chai
      .request(app)
      .get('/matches?inProgress=true')
 
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(inProgressMatchesMock);
  })

  it('Retorna todas as partidas finalizadas', async () => {
    sinon.stub(Matches, "findAll").resolves(FinishedMatchesMock as unknown as Matches[]);
    chaiHttpResponse = await chai
      .request(app)
      .get('/matches?inProgress=false')
 
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(FinishedMatchesMock);
  })
});