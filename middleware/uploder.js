
const multer = require('multer');
const cloudinary = require('../config/cloudinary');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadToCloudinary = (fieldName) => [
  upload.single(fieldName),
  (req, res, next) => {
    if (!req.file) return next(); // Skip if no file provided

    const stream = cloudinary.uploader.upload_stream(
      { resource_type: 'image' },
      (error, result) => {
        if (error) return res.status(500).json({ success: false, message: error.message });

        req.body.imageUrl = result.secure_url;
        next();
      }
    );

    stream.end(req.file.buffer);
  },
];

module.exports = uploadToCloudinary;
