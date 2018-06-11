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

      it('brand is a field in the created Watch row', () => {
        expect(rolex.brand).to.be.equal('Rolex');
      });

      it('model is a field in the created Watch row', () => {
        expect(rolex.model).to.be.equal('Navigator');
      })
      it('gender is a field in the created Watch row', () => {
        expect(rolex.gender).to.be.equal('female')
      })
    }); // end describe('correctPassword')
  }); // end describe('instanceMethods')
}); // end describe('User model')
