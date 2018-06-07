const User = require('./user');
const Watch = require('./watch');
const Cart = require('./cart');
const Order = require('./order');

Watch.belongsTo(User, { as: 'seller' });
User.hasMany(Watch, { as: 'listings', foreignKey: 'sellerId' });

User.belongsToMany(Watch, {
  as: 'cartItems',
  through: {
    model: Cart,
    unique: false,
  },
});

Watch.belongsToMany(User, {
  as: 'shoppers',
  through: {
    model: Cart,
    unique: false,
  },
});

User.belongsToMany(Watch, {
  as: 'saleItems',
  through: {
    model: Order,
    unique: false,
  },
});

Watch.belongsToMany(User, {
  as: 'purchasers',
  through: {
    model: Order,
    unique: false,
  },
});

module.exports = {
  User,
  Watch,
  Cart,
  Order,
};
