import React, { useEffect, useReducer, useState } from 'react';
import { initialState, PromptReducer } from '../reducers/PromptReducer';

const useGetModel = () => {
  const [models, setModels] = useState([]);
  const [state, dispatch] = useReducer(PromptReducer, initialState);

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
