const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: 'CLOUD_NAME',
  api_key: 'API_KEY',
  api_secret: 'API_SECRET',
});

module.exports = cloudinary;
