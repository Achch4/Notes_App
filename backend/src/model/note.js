import mongoose from "mongoose";

const noteschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }, // createdAt,updatedAt
);
const Note = mongoose.model("Note", noteschema);

export default Note;
