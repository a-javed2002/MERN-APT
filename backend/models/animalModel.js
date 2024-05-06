import mongoose from "mongoose";

const animalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    diseases: [String],
  },
  { timestamps: true }
);

export default mongoose.model("animals", animalSchema);
