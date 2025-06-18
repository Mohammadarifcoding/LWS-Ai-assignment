import React, { useState } from 'react';

import { useDownloadImage } from './../../../hooks/useDownload';
import { FaSpinner } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const ImageCard = ({ image }) => {
  const download = useDownloadImage();
  const [loading, setLoading] = useState(false);

  const handleDownloadImage = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      await download(image, "photo.png");
    } catch (err) {
      console.error("Download failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDownloadImage();
        }}
        className="absolute bottom-2 right-2 p-2 bg-white rounded-md shadow transition-opacity"
        disabled={loading}
      >
        {loading ? (
          <FaSpinner className="h-5 w-5 animate-spin text-gray-800" />
        ) : (
          <MdOutlineFileDownload className="h-5 w-5 text-gray-800" />
        )}
      </button>
      <img src={image} alt="Abstract art" className="w-full h-auto" />
    </div>
  );
};

export default ImageCard;
