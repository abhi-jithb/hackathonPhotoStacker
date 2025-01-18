import React, { useState, useRef } from 'react';
import { Plus, Upload, X } from 'lucide-react';

const ImageUpload = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      onImageUpload(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleClearImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Preview overlay */}
      {image && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
          <div className="relative max-w-2xl max-h-[80vh] p-4">
            <button
              onClick={handleClearImage}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
            >
              <X size={20} />
            </button>
            <img src={image} alt="Preview" className="max-w-full max-h-[70vh] rounded-lg" />
          </div>
        </div>
      )}

      {/* Floating upload button */}
      <div 
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={handleButtonClick}
          className="group relative flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          {/* Main button */}
          <div className="relative z-10 p-4 flex items-center space-x-2">
            <Plus 
              size={24} 
              className={`transform transition-transform duration-300 ${
                isHovered ? 'rotate-180 scale-110' : ''
              }`}
            />
            <span className={`overflow-hidden transition-all duration-300 ${
              isHovered ? 'w-24 opacity-100' : 'w-0 opacity-0'
            }`}>
              Upload
            </span>
          </div>

          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Tooltip */}
        <div className={`absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded transition-all duration-300 ${
          isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
        }`}>
          Upload Image
        </div>
      </div>
    </>
  );
};

export default ImageUpload;