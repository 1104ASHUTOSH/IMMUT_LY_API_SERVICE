// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const basicAuth = require('express-basic-auth');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/productmanagement';

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Basic authentication middleware
const users = { 'admin': 'password' };
app.use(basicAuth({ users, challenge: true, unauthorizedResponse: 'Unauthorized Access' }));

// Routes
app.use('/products', productsRouter);

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
