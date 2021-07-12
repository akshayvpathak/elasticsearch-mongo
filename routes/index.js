const defaultRouter = absoluteRequire('routes/default');
const productRouter = absoluteRequire('routes/product');
module.exports = (app) => {
  app.use('/', defaultRouter);
  app.use('/product', productRouter);
};
