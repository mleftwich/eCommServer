// IMPORT SEQUELIZE
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// IMPORT MODELS
const Product = require("./Product");
const Tag = require("./Tag");

// CREATE PRODUCT COLUMNS, FIELDS, AND RULES
class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;