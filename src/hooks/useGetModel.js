import React, { useContext, useEffect, useState } from 'react';
import { PromptContext } from '../context';

const useGetModel = () => {
  const [models, setModels] = useState([]);
  const { dispatch } = useContext(PromptContext);

  useEffect(() => {
    let ignore = true;

    const GetModels = async () => {
      if (!ignore) return;
      const url = 'https://image.pollinations.ai/models';
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setModels([...data]);
        dispatch({ type: 'SET_MODEL', payload: data[0] });
      }
      console.log('Running times');
    };

    GetModels();

    return () => {
      ignore = false;
    };
  }, []);
  return models;
};

export default useGetModel;
