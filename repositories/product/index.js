const Product = absoluteRequire('models/product');

exports.CreateProduct = (product) => CreateProduct(product);
// await Response.create(response);
async function CreateProduct(product) {
  try {
    await Product.create(product);
    return true;
  } catch (err) {
    return err;
  }
}
