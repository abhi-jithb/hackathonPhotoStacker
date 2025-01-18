import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageUpload from './components/ImageUpload';  // Import ImageUpload component
import ImageGallery from './components/ImageGallery';
import BackgroundAnimation from './components/BackgroundAnimation';

const App = () => {
  const [images, setImages] = useState([]);

  // Fetch images from backend on initial load
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/images');
        setImages(response.data); // Update with the fetched images
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // Function to handle image upload
  const handleImageUpload = (image) => {
    setImages([...images, image]);
  };

  return (
    <div className="relative min-h-screen text-black bg-gradient-to-br from-blue-500 to-purple-500">
      <BackgroundAnimation />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Photo Stacking App</h1>
          
          {/* Pass handleImageUpload to ImageUpload component */}
          <ImageUpload onImageUpload={handleImageUpload} />
          
          <ImageGallery images={images} />
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <img
          src="http://localhost:5000/api/qrcode"
          alt="QR Code"
          className="w-24 h-24 object-contain shadow-lg"
        />
      </div>
    </div>
  );
};

export default App;
