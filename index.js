
exports.pagination = function (req, res, next) {
  if (req.query.page_size && req.query.page_size.match(/^\d+$/)) {
    req.params = req.params || {};
    req.params.pagination = {
      page_number: req.query.page_number ? req.query.page_number : 1,
      page_size: req.query.page_size
    };
  }
  next();
};
