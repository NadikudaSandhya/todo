const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://yash:<password>@cluster0.ienjtk0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// To-Do Model
const TodoSchema = new mongoose.Schema({
    title: String,
});

const Todo = mongoose.model('Todo', TodoSchema);

// API Endpoints

// Get all todos
app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// Add a new todo
app.post('/todos', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
    });
    await todo.save();
    res.json(todo);
});

// Delete a todo by ID
app.delete('/todos/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
