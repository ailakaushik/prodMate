const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/db.js');

const taskRoutes = require('./Routes/TaskRoutes.js');
const quoteRoutes = require('./Routes/QuoteRoute.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/quotes', quoteRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
