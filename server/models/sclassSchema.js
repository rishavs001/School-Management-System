import mongoose from "mongoose";

const sclassSchema = new mongoose.Schema(
  {
    sclassName: {
      type: String,
      required: true,
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admin",
      required: true, // This makes sure school cannot be null
    },
  },
  { timestamps: true }
);

const SclassSchema = mongoose.model("Sclass", sclassSchema);
export { SclassSchema as Sclass };
