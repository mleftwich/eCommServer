// IMPORT SEQUELIZE
const { Model, DataTypes } = require("sequelize");
// IMPORT DATABASE CONNECTION
const sequelize = require("../config/connection");
const Category = require("./Category");

// CREATE PRODUCT COLUMNS, FIELDS AND RULES
class Product extends Model {}

Product.init(
  {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Category,
          key: "id",
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
