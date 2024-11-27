require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const ingredientsRoutes = require('./routes/ingredientsRoutes'); // Ingredients routes


const app = express();

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        account.init().catch((error) => {
            console.error('Error initializing account model:', error.message);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    })

// Routes

app.use('/api/ingredients', ingredientsRoutes);

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});