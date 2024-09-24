const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the listing schema
const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        set: (v) => v === "" ? "https://unsplash.com/photos/3d-render-of-luxury-hotel-lobby-and-reception-FNAURWZ6Mqc" : v, // ternary string
    },
    price: Number,
    location: String,
    country: String,
});

// Create and export the Listing model
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
