import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photos: {
    type: [String],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  energy: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
  saturatedFat: {
    type: Number,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
  carbSugars: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  fibre: {
    type: Number,
    required: true,
  },
  salt: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Product", ProductSchema);
