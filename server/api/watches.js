const router = require('express').Router();
const defaultHandler = require('./errorHandler');
const { Watch, User } = require('../db/models');

router.get(
  '/',
  defaultHandler(async (req, res, next) => {
    const watches = await Watch.findAll();

    res.json(watches);
  })
);

router.get(
  '/:id',
  defaultHandler(async (req, res, next) => {
    const watchId = req.params.id;
    const watch = await Watch.findById(watchId);

    res.json(watch);
  })
);

router.post(
  '/',
  defaultHandler(async (req, res, next) => {
    const watchToSell = await Watch.create(req.body.watch);
    const user = await User.scope('populated').findById(req.body.id);
    await user.addListing(watchToSell);
    const newUser = await User.scope('populated').findById(req.body.id);
    res.json({ watchToSell, newUser });
  })
);

router.put(
  '/:id',
  defaultHandler(async (req, res, next) => {
    const watchToEdit = await Watch.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });
    const updatedWatch = watchToEdit[1][0];
    res.send(updatedWatch);
  })
);

router.delete(
  '/:id',
  defaultHandler(async (req, res, next) => {
    await Watch.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.sendStatus(200);
  })
);

module.exports = router;
