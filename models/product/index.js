const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');
const elasticsearch = require('elasticsearch');

const { Schema } = mongoose;

const esClient = new elasticsearch.Client({ host: 'localhost:9200' });

const productSchema = new Schema({
  name: {
    type: String,
    es_indexed: true,
    es_type: 'text',
    es_analyzer: 'my_analyzer',
  },
  description: {
    type: String,
    es_type: 'text',
    es_indexed: true,
    es_analyzer: 'my_analyzer',
  },
});

productSchema.plugin(mongoosastic, {
  esClient,
});

const Product = mongoose.model('Product', productSchema);
Product.createMapping(
  {
    settings: {
      analysis: {
        analyzer: {
          my_analyzer: {
            tokenizer: 'my_tokenizer',
            filter: ['lowercase'],
          },
        },
        tokenizer: {
          my_tokenizer: {
            type: 'ngram',
            min_gram: 3,
            max_gram: 3,
            token_chars: ['letter', 'digit'],
          },
        },
      },
    },
  },
  (err, mapping) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
    if (mapping) {
      // eslint-disable-next-line no-console
      console.log('Mapping Created');
    }
  }
);
module.exports = Product;
