import React from 'react';
import image from '/src/assets/images/ai-image-6.jpeg';
import { useLocalStorage } from './../../../hooks/useLocalStorage';
import ImageCard from '../../shared/Card/ImageCard';
const DownloadPage = () => {
  const [downloads,setDownloads] = useLocalStorage("images", []);
  return (
    <main className="relative z-10">
      {/* Welcome Message */}
      <h2 className="text-4xl font-bold mb-8">
        Downloaded <span className="text-2xl">👋</span>
      </h2>
      {/* Image Presets Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

         {
        downloads.map((img)=>  <ImageCard key={img} image={img} />)
      }
      </div>
     
    </main>
  );
};

export default DownloadPage;
