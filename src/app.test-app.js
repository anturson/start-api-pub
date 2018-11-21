import {
  describe, it, before, after,
} from 'mocha';
import { config } from 'dotenv';
import chai from 'chai';
import chaiHttp from 'chai-http';

import createApp from './app';

chai.use(chaiHttp);

const { expect, request } = chai;

config();

const app = createApp();

describe('App', () => {
  let server;

  before((done) => {
    server = app.listen(5001, done);
  });

  describe('/', () => {
    it('should say hello', async () => {
      const res = await request(app)
        .get('/');
      expect(res.status).to.equal(200);
      expect(res.text).to.equal('Hello');
    });
  });

  describe('/users', () => {
    it('should return 3 users', async () => {
      const res = await request(app)
        .get('/users')
        .set('Accept', 'application/json');
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('length', 3);
    });
  });

  after(() => {
    server.close();
  });
});
