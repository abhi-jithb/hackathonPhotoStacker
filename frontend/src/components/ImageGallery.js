import React, { useEffect, useState } from 'react';

const ImageGallery = ({ images }) => {
  const [highlightedImage, setHighlightedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly select an image from the array
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setHighlightedImage(randomImage);
    }, 20000); // Highlight one image every 20 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [images]);

  return (
    <div className="relative w-full h-screen overflow-auto p-4 grid grid-cols-5 gap-3">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative transition-all transform ${
            highlightedImage === image ? "scale-110 z-10" : "scale-100"
          }`}
        >
          <img
            src={image}
            alt={`Uploaded ${index + 1}`}
            className="object-cover w-30 h-30 rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
