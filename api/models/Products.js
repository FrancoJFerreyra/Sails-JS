/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'string', columnName: '_id' },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    img: { type: 'string', required: true },
    price: { type: 'number', required: true },
    stock: { type: 'number', required: true },
  },

};

