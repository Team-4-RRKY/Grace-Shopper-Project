const defaultHandler = asyncFunc => {
  return function(req, res, next) {
    return Promise.resolve(asyncFunc.call(this, req, res, next)).catch(err => {
      next(err);
    });
  };
};

module.exports = defaultHandler;
