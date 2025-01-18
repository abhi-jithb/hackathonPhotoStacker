import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ImageGallery from './components/ImageGallery';
import BackgroundAnimation from './components/BackgroundAnimation';

const App = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (image) => {
    setImages([...images, image]);
  };

  return (
    <div className="relative min-h-screen text-black bg-gradient-to-br from-blue-500 to-purple-500">
      <BackgroundAnimation />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-3xl font-bold mb-6">Photo Stacking App</h1>
          <ImageUpload onImageUpload={handleImageUpload} />
          <ImageGallery images={images} />
        </div>
      </div>
    </div>
  );
};

export default App;
