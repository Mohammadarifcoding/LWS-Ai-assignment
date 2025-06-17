import React, { useEffect } from 'react';

const Prompt = () => {
    useEffect(()=>{

 const getImageByPrompt = async (prompt) => {
  const response = await fetch(`https://image.pollinations.ai/prompt/${prompt}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${import.meta.env.VITE_IMAGE_API_KEY}`,
      Authorization: `Bearer _cJc7CEsPg__673n`,
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
};
getImageByPrompt("Make me a beautiful girl picture")
    },[])
};

export default Prompt;





