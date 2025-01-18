const Image = require('../models/Image');

// Controller function for uploading an image
const uploadImage = async (req, res) => {
  try {
    const { path } = req.file;
    const position = {
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
    };

    const newImage = new Image({
      url: path,
      position,
    });

    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller function for fetching all images
const getAllImages = async (req, res) => {
  try {
    const images = await Image.find(); // Fetch all images from the database
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { uploadImage, getAllImages };
