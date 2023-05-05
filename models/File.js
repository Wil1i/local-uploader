const { DataTypes } = require("sequelize");
const db = require("../configs/db");

const File = db.define(
  "files",
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },

    description: {
      type: DataTypes.STRING,
    },

    name: {
      type: DataTypes.STRING,
    },

    displayName : {
      type : DataTypes.STRING
    }
  },
  {
    timestamps: false,
  }
);

module.exports = File;
