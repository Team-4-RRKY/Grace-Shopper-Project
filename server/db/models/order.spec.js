const { expect } = require('chai');
const db = require('../index');
const Order = db.model('order');

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('', () => {
    describe('', () => {
      let sampleOrder;

      beforeEach(() => {
        return Order.create({
          id: 1,
          quantity: 4
        }).then(ord => {
          sampleOrder = ord;
        });
      });

      it('id is a field in the created Order row', () => {
        expect(sampleOrder.id).to.be.equal(1);
      });

      it('quantity is a field in the created Order row', () => {
        expect(sampleOrder.quantity).to.be.equal(4);
      });
    });
  });
});
