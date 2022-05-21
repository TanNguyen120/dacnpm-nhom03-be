// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../../config/db.config");

//--------------------------------------------
//- Phần này làm việc với mySQL để tạo model -
//--------------------------------------------


// import { Model, DataTypes } from "sequelize";
// import sequelize from "../../config/db.config.js";

/*
class Product extends Model {}
Product.init(
  {
    title: { type: DataTypes.STRING, defaultValue: "" },
    price: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    desc: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
    ownerId: { type: DataTypes.INTEGER, allowNull: false },
    category: { type: DataTypes.STRING },
    stock: { type: DataTypes.INTEGER },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isPublished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Product",
    paranoid: true,
  }
);
*/


// phần này làm việc với monodb
import mongoose, { Schema } from "mongoose";


// thêm các thuộc tính trong schema này theo colection trong mongodb nếu trong quá trình phát triển phát sinh thêm thuộc tính mới 
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    short_description: { type: String, unique: true, required: true },
    long_description: { type: String },
    price: { type: String },
    thumbnail: { type: Array },
    properties: { type: Array },
    variations: { type: Array },
    category: { type: Schema.Types.ObjectId, ref: "categories" },
    storeId: { type: Schema.Types.ObjectId, ref: "stores" },
    isPublished: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },

  },
  { timestamps: true }
);

const Product = mongoose.model("Products", productSchema);

export default Product;
