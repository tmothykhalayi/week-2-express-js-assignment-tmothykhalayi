
require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  db: {
    uri: process.env.DB_URI || 'mongodb://localhost:27017/mydatabase',
  },
  apiKey: process.env.API_KEY || 'your-api-key-here',
};

module.exports = config;