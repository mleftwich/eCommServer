// IMPORT MODELS
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// PRODUCT BELONGS TO CATEGORY
Product.belongsTo(Category, {
  foreignKey: 'category id'
})

// CATEGORY HAS MANY PRODUCTS
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// THROUGH ProductTag PRODUCT BELONGS TO MANY TAGS
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'product_tags',
  foreignKey: 'product id'
})

// THROUGH ProductTag TAG BELONGS TO MANY
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'product_tags',
  foreignKey: 'tag_id',
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
