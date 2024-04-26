const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    image: {
      type: String,
      required: [true, "image is required"],
    },
    is_enabled: {
      type: Boolean,
      required: [true, "is_Enabled is required"],
    },
    origin_price: {
      type: Number,
      required: [true, "origin price is required"],
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
    title: {
      type: String,
      required: [true, "title is required"],
    },
    unit: {
      type: String,
      required: [true, "unit is required"],
    },
  },
  { versionKey: false }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
