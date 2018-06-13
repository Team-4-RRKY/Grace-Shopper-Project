/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return User.create({
        firstName: 'Cody',
        lastName: 'Smith',
        email: codysEmail
      })
    })

    it('GET /api/users', () => {
      return request(app)
        .get('/api/users')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].email).to.be.equal(codysEmail)
        })
    })

    it('GET /api/users/:id', () => {
      return request(app)
        .get(`/api/users/${1}`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.email).to.be.equal(codysEmail)
        })
    })

    it('POST api/users creates new user', () => {

      return request(app)
      .post('/api/users')
      .send({
        firstName: 'Cody',
        lastName: 'Smith',
        email: 'codyuniqueemail@gmail.com'
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.message).to.equal('New User Instance Created');
        expect(res.body.newUserInstance.id).to.not.be.an('undefined');
        expect(res.body.newUserInstance.firstName).to.equal('Cody');
      })

    })
    it('PUT api/users/:id updates user', () => {

      return request(app)
      .put(`/api/users/${1}`)
      .send({
        firstName: 'NotCody',
        lastName: 'NotSmith',
        email: 'codyuniqueemail@gmail.com'
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.message).to.equal('User Instance Updated');
        expect(res.body.updatedUser.id).to.not.be.an('undefined');
        expect(res.body.updatedUser.firstName).to.equal('NotCody');
      })

  })
  }) // end describe('/api/users')
}) // end describe('User routes')
