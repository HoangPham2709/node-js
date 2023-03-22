import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    desc: {
        type: String,
    },
    status: {
        type: Boolean,
    },
    quantily: {
        type: Number,
    }
});
export default mongoose.model('products', productSchema); 
