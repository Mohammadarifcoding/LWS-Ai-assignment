import React, {  useReducer } from 'react';
import { PromptContext } from '../context';
import { initialState, PromptReducer } from '../reducers/PromptReducer';
import { useGetModel } from '../hooks';


const PromptProvider = ({children}) => {
  const [state,dispatch] = useReducer(PromptReducer,initialState)
  const model = useGetModel()
    return (
        <PromptContext.Provider value={{state,dispatch,model}}>
            {children}
        </PromptContext.Provider>
    );
};

export default PromptProvider;