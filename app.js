const express = require('express');
const { connectToDatabase, closeDatabaseConnection } = require('./databaseconnection');
const userRoutes = require('./router/user');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

async function startServer() {
  await connectToDatabase();

  // Use the userRoutes
  app.use('/users', userRoutes);
  app.use('/products', require('./router/products'));
  app.use('/orderbuy', require('./router/orderbuy'));

  // Start the Express server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();

// Handle server shutdown
process.on('SIGINT', async () => {
  await closeDatabaseConnection();
  console.log('MongoDB connection closed');
  process.exit(0);
});