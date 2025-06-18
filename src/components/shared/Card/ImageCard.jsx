import React, { useContext, useState } from 'react';

import { useDownloadImage } from './../../../hooks/useDownload';
import { FaSpinner } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { PromptContext } from '../../../context';
import { useLocalStorage } from './../../../hooks/useLocalStorage';

const ImageCard = ({ image }) => {
  const download = useDownloadImage();
  const {state,dispatch} = useContext(PromptContext)
  const [loading, setLoading] = useState(false);
  const [value,setValue] = useLocalStorage("images", []);

  const handleDownloadImage = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      await download(image, "photo.png");
      const findImage = value.find((item) => item === image);
      if (!findImage) {
        setValue([...value,image]);
      };
    } catch (err) {
      console.error("Download failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative border bg-gray-400 max-h-full">
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDownloadImage();
        }}
        className="absolute bottom-2 right-2 p-2 bg-white rounded-md shadow transition-opacity"
        disabled={loading}
      >
        {loading ? (
          <FaSpinner className="animate-spin" />
        ) : (
          <MdOutlineFileDownload />
        )}
      </button>
      <img src={image}  alt="Abstract art" className="w-full h-auto bg-black/20" />
    </div>
  );
};

export default ImageCard;
