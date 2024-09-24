const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");  // Corrected path to ./models/listing.js

// MongoDB connection URL
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Function to connect to MongoDB
main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log("Error connecting to DB:", err);
    });

// Async function to establish the database connection
async function main() {
    await mongoose.connect(MONGO_URL);
}

// Test route to confirm the server is running
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Route to test saving a listing to the database
app.get("/testingListing", async (req, res) => {
    try {
        let sampleListing = new Listing({
            title: "my New Villa",
            description: "By the beach",
            price: 1000,
            location: "Calangute, Goa",
            country: "India",
        });
        await sampleListing.save();
        console.log("Sample was saved successfully");
        res.send("Successful testing");
    } catch (err) {
        console.error("Error saving the listing:", err);
        res.status(500).send("Error saving the listing");
    }
});

// Start the server on port 8090
app.listen(8090, () => {
    console.log("Server is running on port 8090");
});
