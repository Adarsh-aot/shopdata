require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log('Connected successfully to MongoDB using Mongoose');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

function closeDatabaseConnection() {
  return mongoose.connection.close();
}

module.exports = { connectToDatabase, closeDatabaseConnection };