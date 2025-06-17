import React, { useReducer } from 'react';
import { PromptContext } from '../context';
import { initialState, PromptReducer } from '../reducers/PromptReducer';

const PromptProvider = ({children}) => {
  const [state,dispatch] = useReducer(PromptReducer,initialState)
  
    return (
        <PromptContext.Provider value={{state,dispatch}}>
            {children}
        </PromptContext.Provider>
    );
};

export default PromptProvider;