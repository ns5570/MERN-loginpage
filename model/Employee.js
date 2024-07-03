const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors package

const app = express();
const port = 3001;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/employee';

// Mongoose Schema and Model
const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const EmployeeModel = mongoose.model('employees', EmployeeSchema);

// Example API routes
app.get('/employees', async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.post('/register', async (req, res) => { // Example route for registration
  const { name, email, password } = req.body;

  try {
    const newEmployee = new EmployeeModel({ name, email, password });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  // Start the server after successful MongoDB connection
  app.listen(3001, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});
