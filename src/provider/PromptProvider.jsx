import { useEffect, useReducer, useState } from 'react';
import { initialState, PromptReducer } from '../reducers/PromptReducer';
import { PromptContext } from '../context';
import { getResult } from '../utils';
import { GetModels } from '../hooks/useGetModel';

const PromptProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PromptReducer, initialState);
  const [model, setModel] = useState([]);

  //    dispatch({ type: 'SET_MODEL', payload: model[0] });
  useEffect(() => {
    let ignore = false;

    const getAllModel = async () => {
      if (ignore) return;
      console.log('This function running');
      const modeldata = await GetModels();
      setModel([...modeldata]);
      dispatch({ type: 'SET_MODEL', payload: modeldata[0] });
    };
    getAllModel();
    return () => (ignore = true);
  }, []);
  return (
    <PromptContext.Provider value={{ state, dispatch, model }}>{children}</PromptContext.Provider>
  );
};

export default PromptProvider;
