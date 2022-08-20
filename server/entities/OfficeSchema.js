import mongoose from "mongoose";

const OfficeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  purchaseLink: {
    type: String,
    required: true,
  },
});

const Office = mongoose.model("Office", OfficeSchema);

export default Office;
