import React, { useContext } from 'react';
import Search from './Prompt/Search/Search';
import Prompt from './Prompt/Prompt';
import Result from './Result/Result';
import { getResult } from '../../../utils';
import { PromptContext } from '../../../context';

const Home = () => {
    const {state,dispatch} = useContext(PromptContext)
    const getFullResult = async()=>{
      dispatch({type:'SET_LOADING',payload:true})
    let data =  setTimeout(async()=> {
   let response = await getResult(state.prompt,state.setting)
   return response
    },3000)
    dispatch({type:'SET_RESPONSE',payload:data})
    dispatch({type:'SET_LOADING',payload:false})
    return data
  }
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">
        Let's create a masterpiece, Arif! <span class="text-2xl">👋</span>
      </h2>
      <Prompt/>
      <Result/>

    </div>
  );
};

export default Home;
