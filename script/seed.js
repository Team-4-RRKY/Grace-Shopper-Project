'use strict';

const db = require('../server/db');
const { User, Watch, Cart, Order } = require('../server/db/models');

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
  const users = await Promise.all([
    User.create({ name: 'john doe', email: 'cody@email.com', password: '123' }),
    User.create({
      name: 'jane doe',
      email: 'murphy@email.com',
      password: '123',
    }),
  ]);

  const watches = await Promise.all([
    Watch.create({
      brand: 'Swatch',
      model: 'SW1',
      image: 'picture',
      price: 55,
      quantity: 1,
      style: 'newStyle',
      tier: 'low-end',
      gender: 'F',
    }),
    Watch.create({
      brand: 'Tag-heuer',
      model: 'TH1',
      image: 'picture tag',
      price: 120,
      quantity: 15,
      style: 'oldStyle',
      tier: 'low-end',
      gender: 'M',
    }),
  ]);

  await users[0].setListings(watches[0]);
  await Promise.all([Cart.create({ userId: 1, watchId: 1 })]);
  const cart = await User.findAll({
    include: [
      {
        model: Watch,
        as: 'cartItems',
      },
    ],
  });
  // console.log(cart);
  await Promise.all([Order.create({ userId: 1, watchId: 1 })]);
  const order = await User.findAll({
    include: [
      {
        model: Watch,
        as: 'saleItems',
      },
      {
        model: Watch,
        as: 'cartItems',
      },
      {
        model: Watch,
        as: 'listings',
      },
    ],
  });
  console.log(order);

  /*
  const getSellers = await Promise.all([
    watches[0].setSeller(1),
    watches[1].setSeller(2)
  ]);
    await Promise.all(getSellers);
 */

  // await Promise.all([
  //   users[0].addWatches([watches[0], watches[1]]),
  //   users[1].addWatches([watches[0], watches[1]])
  // ]);
  // await Promise.all(getCarts);

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`);
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
