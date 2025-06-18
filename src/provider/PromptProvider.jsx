import { useEffect, useReducer, useState } from 'react';
import { initialState, PromptReducer } from '../reducers/PromptReducer';
import { PromptContext } from '../context';
import { useGetModel } from '../hooks';



const PromptProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PromptReducer, initialState);
  const [model, setModel] = useState([]);
  const models = useGetModel();
  //    dispatch({ type: 'SET_MODEL', payload: model[0] });
  useEffect(() => {
    let ignore = false;

    const getAllModel = async () => {
      if (ignore) return;
      const modeldata = await models();
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
