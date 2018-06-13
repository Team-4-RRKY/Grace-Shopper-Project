/* global describe beforeEach it */

const { expect } = require('chai');
const db = require('../index');
const Cart = db.model('cart');

describe('Cart model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('', () => {
    describe('', () => {
      let sampleCart;

      beforeEach(() => {
        return Cart.create({
          id: 1,
          quantity: 4
        }).then(crt => {
          sampleCart = crt;
        });
      });

      it('id is a field in the created Cart row', () => {
        expect(sampleCart.id).to.be.equal(1);
      });

      it('quantity is a field in the created Cart row', () => {
        expect(sampleCart.quantity).to.be.equal(4);
      });
    });
  });
});
