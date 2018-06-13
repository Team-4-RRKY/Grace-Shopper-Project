/* global describe beforeEach it */

const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const Watch = db.model('watch');
const User = db.model('user');

describe('Watches routes', () => {
  beforeEach(async () => {
    return db.sync({ force: true });
  });

  describe('/api/watches/', () => {
    beforeEach(() => {
      return Watch.create({
        brand: 'Rolex',
        model: 'Navigator',
        image: 'yes.com',
        price: '54.54',
        quantity: 4,
        gender: 'female',
      });
    });

    it('GET /api/watches', () => {
      return request(app)
        .get('/api/watches')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0].brand).to.be.equal('Rolex');
        });
    });

    it('POST api/watches creates new watch', async () => {
      return request(app)
        .post('/api/watches')
        .send({
          watch: {
            brand: 'Swiss',
            model: 'Cheese',
            image: 'yes.com',
            price: '100.00',
            quantity: 2,
            gender: 'male',
          },
          user: { id: 1 },
        })
        .expect(200)
        .expect(res => {
          expect(res.body.message).to.equal(undefined);
          expect(res.body.id).to.not.be.an('undefined');
          expect(res.body.brand).to.equal('Swiss');
        })
        .catch(e => console.error(e));
    });
    it('PUT api/watches/:id updates user', () => {
      return request(app)
        .put(`/api/watches/${1}`)
        .send({
          brand: 'Movement',
          model: 'Sporter',
        })
        .expect(200)
        .expect(res => {
          expect(res.body.message).to.equal(undefined);
          expect(res.body.id).to.not.be.an('undefined');
          expect(res.body.brand).to.equal('Movement');
        });
    });
  }); // end describe('/api/users')
}); // end describe('User routes')
