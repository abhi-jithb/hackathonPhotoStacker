const express = require('express');
const multer = require('multer');
const imageController = require('../controllers/imageController');

// Set up multer for image file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Specify the upload directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);  // Name the file based on timestamp
  }
});
const upload = multer({ storage });

// Set up routes
const router = express.Router();

// Route to upload an image
router.post('/upload', upload.single('image'), imageController.uploadImage);

module.exports = router;
