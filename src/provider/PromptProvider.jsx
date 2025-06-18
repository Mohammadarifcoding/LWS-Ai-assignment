import { useReducer } from "react";
import { initialState, PromptReducer } from "../reducers/PromptReducer";
import { useGetModel } from "../hooks";
import { PromptContext } from "../context";
import { getResult } from "../utils";


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