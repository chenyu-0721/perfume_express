const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      // required: [true, "Category is required"],。
      default: 0,
    },
    image: {
      type: String,
      default: 0,
      // required: [true, "image is required"],
    },
    is_enabled: {
      type: Boolean,
      default: 0,
      // required: [true, "is_Enabled is required"],
    },
    origin_price: {
      type: Number,
      default: 0,
      // required: [true, "origin price is required"],
    },
    price: {
      type: Number,
      default: 0,
      // required: [true, "price is required"],
    },
    title: {
      type: String,
      default: 0,
      // required: [true, "title is required"],
    },
    unit: {
      type: String,
      default: 0,
      // required: [true, "unit is required"],
    },
  },
  { versionKey: false }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
