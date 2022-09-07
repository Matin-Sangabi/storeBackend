import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    categories: { type: String, required: true },
    model  : {type : String , require : true},
    image: [{ path: { type: String, required: true } }],
    conditions: [
      {
        support: {
          title: { type: String, required: true },
          cat: { type: String, required: true },
          sub: { type: String, required: true },
        },
      },
    ],
    spec: [
      {
        system: {
          title: { type: String, required: true },
          cat: { type: String, required: true },
          sub: { type: String, required: true },
        },
      },
    ],
    
    price: { type: Number, required: true },
    offPrice: { type: Number, required: true },
    discount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);

