const { CreateProduct } = absoluteRequire('repositories/product');

exports.AddProduct = (req, res, next) => AddProduct(req, res, next);

async function AddProduct(req, res, next) {
  try {
    await CreateProduct(req.body);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
}
