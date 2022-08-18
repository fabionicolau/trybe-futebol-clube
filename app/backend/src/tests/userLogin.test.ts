import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';
import { loginMock, userMock } from './userMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Ao fazer o login', () => { 
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(userMock as User);
  });

  afterEach(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })
 
  it('Retorna um erro caso o email ou password sejam inválidos', async () => {
    const { email } = loginMock;
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email, password: 'secret' } );
 
    expect(chaiHttpResponse.status).to.equal(401);
    expect(chaiHttpResponse.body.message).to.be.equal('Incorrect email or password');
  });

  it('Retorna um erro caso algum campo não seja passado',async () => {
    const { email } = loginMock;
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email, password: '' });

    expect(chaiHttpResponse.status).to.equal(400);
    expect(chaiHttpResponse.body.message).to.be.equal('All fields must be filled');
  });
});