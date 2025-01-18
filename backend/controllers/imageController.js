const Image = require('../models/Image');

// Controller function for uploading an image
const uploadImage = async (req, res) => {
  try {
    const { path } = req.file;  // Get the path of the uploaded image
    const position = {
      top: `${Math.random() * 80}%`,  // Random top position for the image
      left: `${Math.random() * 80}%`, // Random left position for the image
    };

    // Create a new image record in the database
    const newImage = new Image({
      url: path,
      position,
    });

    // Save the image to the database
    await newImage.save();
    res.status(201).json(newImage); // Send back the saved image data
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { uploadImage };
