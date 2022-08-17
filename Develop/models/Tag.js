// IMPORT SEQUELIZE
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

// CREATE TAG COLUMNS FIELDS AND RULES
class Tag extends Model {}

Tag.init(
  {
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
