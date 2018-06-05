<<<<<<< HEAD
const User = require("./user");
const Watch = require("./watch");
/*
Watch.belongsTo(User, { as: "Seller" });
User.hasMany(Watch);
=======
const User = require('./user')
const Watch = require('./watch')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
>>>>>>> master
 */
User.belongsToMany(Watch, { through: "CartItem" });
Watch.belongsToMany(User, { through: "CartItem" });
//User.hasMany(PaymentInfo)

module.exports = {
<<<<<<< HEAD
  User,
  Watch
};
=======
  Watch,
  User
}
>>>>>>> master
