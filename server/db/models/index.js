const User = require("./user");
const Watch = require("./watch");
/*
Watch.belongsTo(User, { as: "Seller" });
User.hasMany(Watch);
 */
User.belongsToMany(Watch, { through: "CartItem" });
Watch.belongsToMany(User, { through: "CartItem" });
//User.hasMany(PaymentInfo)

module.exports = {
  User,
  Watch
};
