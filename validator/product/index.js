const { body, validationResult } = require('express-validator');

exports.ValidateAddProduct = (req, res, next) => {
  body('name', 'Please provide name of the product').exists();
  body('description', 'Please provide description of the product').exists();
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
