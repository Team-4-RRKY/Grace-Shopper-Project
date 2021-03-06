'use strict';

const db = require('../server/db');
const { User, Watch, Cart, Order } = require('../server/db/models');
const userData = require('./user_mock');
const watchData = require('./watchdata.js');

/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  // const users = await Promise.all([
  //   User.create({
  //     firstName: 'john',
  //     lastName: 'doe',
  //     email: 'cody@email.com',
  //     password: '123'
  //   }),
  //   User.create({
  //     firstName: 'jane',
  //     lastName: 'doe',
  //     gender: 'Female',
  //     image:
  //       'https://robohash.org/autemvoluptasrepellendus.png?size=50x50&set=set1',
  //     email: 'murphy@email.com',
  //     password: '123'
  //   })
  // ]);
  const userPromises = []
  for (let i = 0; i < userData.length; i++) {
    let newUser = User.create(userData[i])
    await userPromises.push(newUser)
  }
  await Promise.all(userPromises)

  const watchPromises = [];
  for (let j = 0; j < watchData.length; j++) {
    let randomId = Math.floor(Math.random() * Math.floor(20))
    if (randomId === 0) randomId = 1
    let newWatch = Watch.create({...watchData[j], sellerId: randomId});
    watchPromises.push(newWatch);
  }
  await Promise.all(watchPromises);

  // Below code demonstrates how to use association methods

  // await users[0].setListings(watches[0]);
  // await users[0].removeListing(watches[0]);
  // await Promise.all([
  //   Cart.create({ userId: 1, watchId: 1 }),
  //   Cart.create({ userId: 1, watchId: 2 }),
  // ]);
  // const cart = await User.findAll({
  //   include: [
  //     {
  //       model: Watch,
  //       as: 'cartItems',
  //     },
  //   ],
  // });
  // // console.log(cart);
  // await Promise.all([
  //   Order.create({ userId: 1, watchId: 1 }),
  //   Order.create({ userId: 1, watchId: 2 }),
  // ]);
  // await Order.destroy({ where: { userId: 1, watchId: 1 } });
  // const order = await User.findAll({
  //   include: [
  //     {
  //       model: Watch,
  //       as: 'saleItems',
  //     },
  //     {
  //       model: Watch,
  //       as: 'cartItems',
  //     },
  //     {
  //       model: Watch,
  //       as: 'listings',
  //     },
  //   ],
  // });
  // console.log(
  //   order[0].dataValues.cartItems.length,
  //   order[0].dataValues.listings.length,
  //   order[0].dataValues.saleItems.length
  // );

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${userData.length} users`);
  console.log(`seeded successfully`);
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  seed()
    .catch(err => {
      console.error(err);
      process.exitCode = 1;
    })
    .then(() => {
      // `finally` is like then + catch. It runs no matter what.
      console.log('closing db connection');
      db.close();
      console.log('db connection closed');
    });
  /*
   * note: everything outside of the async function is totally synchronous
   * The console.log below will occur before any of the logs that occur inside
   * of the async function
   */
  console.log('seeding...');
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
