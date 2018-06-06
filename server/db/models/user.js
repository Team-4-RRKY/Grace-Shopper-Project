<<<<<<< HEAD
const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
=======
const crypto = require('crypto');
const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
>>>>>>> master
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  address: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  purchaseHistory: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  // Making `.password` act like a func hides it when serializing to JSON.
  // This is a hack to get around Sequelize's lack of a "private" option.
  password: {
    type: Sequelize.STRING,
    get() {
<<<<<<< HEAD
      return () => this.getDataValue("password");
=======
      return () => this.getDataValue('password');
>>>>>>> master
    }
  },
  salt: {
    type: Sequelize.STRING,
    get() {
<<<<<<< HEAD
      return () => this.getDataValue("salt");
=======
      return () => this.getDataValue('salt');
>>>>>>> master
    }
  },
  googleId: {
    type: Sequelize.STRING
  }
});

module.exports = User;

/**
 * instanceMethods
 */
User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password();
};

/**
 * classMethods
 */
User.generateSalt = function() {
<<<<<<< HEAD
  return crypto.randomBytes(16).toString("base64");
=======
  return crypto.randomBytes(16).toString('base64');
>>>>>>> master
};

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash("RSA-SHA256")
    .update(plainText)
    .update(salt)
<<<<<<< HEAD
    .digest("hex");
=======
    .digest('hex');
>>>>>>> master
};

/**
 * hooks
 */
const setSaltAndPassword = user => {
<<<<<<< HEAD
  if (user.changed("password")) {
=======
  if (user.changed('password')) {
>>>>>>> master
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);
