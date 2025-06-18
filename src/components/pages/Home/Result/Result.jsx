import React, { useContext } from 'react';
import ImageCard from '../../../shared/Card/ImageCard';
import { PromptContext } from '../../../../context';
const Result = () => {
    const {state} = useContext(PromptContext)
const { isLoading, data } = state.response || {};
 const hasImages = Array.isArray(data) && data.length > 0
 console.log(state.response)
    return (
<div>
  <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

         {state.response.isLoading && (
                           <div className="col-span-full text-center py-10">
                        <p className="text-zinc-400 text-lg">Generating images for "{state.prompt}"...</p>
                        <div className="mt-4 animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
                    </div>
      )}
    {!isLoading && !hasImages && (
        <p className="text-gray-400 text-sm">No image found.</p>
      )}
     {!isLoading && hasImages && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {data.map((image) => (
            <ImageCard key={image} image={image} />
          ))}
        </div>
      )}
  </div>
</div>

    );
};

export default Result;