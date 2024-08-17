const mongoose = require('mongoose');

// Define the schema for a to-do item
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});

// Create the model from the schema
const Todo = mongoose.model('Todo', TodoSchema);

// Export the model so it can be used in other parts of the application
module.exports = Todo;
