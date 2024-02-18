import mongoose from "mongoose";
const { Schema } = mongoose;

export const Todo = mongoose.model(
  "todo",
  new Schema({
    title: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },

    eggs: {
      type: Number,
      min: [6, "Too few eggs"],
      max: [12, "Too many eggs"],
    },

    completed: {
      type: Boolean,
      default: false,
    },
  })
);
