const defaultHandler = asyncFunc => {
  return function(req, res, next) {
    return Promise.resolve(asyncFunc.apply(this, req, res)).catch(err => {
      next(err);
    });
  };
};

module.exports = defaultHandler;
