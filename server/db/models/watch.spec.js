/* global describe beforeEach it */

const { expect } = require('chai');
const db = require('../index');
const Watch = db.model('watch');

describe('Watch model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('', () => {
    describe('', () => {
      let rolex;

      beforeEach(() => {
        return Watch.create({
            brand: 'Rolex',
            model: 'Navigator',
            image: 'yes.com',
            price: '54.54',
            quantity: 4,
            gender: 'female'
        }).then(watch => {
          rolex = watch;
        });
      });

      xit('returns true if ', () => {
        expect(rolex).to.be.equal(true);
      });

      xit('returns ', () => {
        expect(rolex).to.be.equal(false);
      });
    }); // end describe('correctPassword')
  }); // end describe('instanceMethods')
}); // end describe('User model')
