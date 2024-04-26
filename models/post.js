const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      default: "",
    },
    id: {
      type: String,
    },
    image: {
      type: String,
      default: "",
    },
    is_enabled: {
      type: Number,
      default: 1,
    },
    origin_price: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      required: [true, "title未填寫"],
    },
    unit: {
      type: String,
      default: 0,
    },
  },
  { versionKey: false }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
