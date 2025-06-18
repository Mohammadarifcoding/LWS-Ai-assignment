import React, { useContext, useState } from 'react';
import { PromptContext } from '../../../../../context';
import { getImageByPrompt, getResult } from '../../../../../utils';
import { FaSpinner } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';

const Search = () => {
  const { state, dispatch } = useContext(PromptContext);
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: 'SET_PROMPT', payload: prompt });
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const randomImages = await getResult(prompt, state.setting);
      console.log('Random image', randomImages);
      dispatch({ type: 'SET_RESPONSE', payload: randomImages });
    } catch (error) {
      console.error('Image fetch failed:', error);
      dispatch({ type: 'SET_RESPONSE', payload: [] });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <div className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
      <div className="flex items-center">
        <div className="pl-5 pr-2">
          <svg
            className="w-5 h-5 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          onChange={(e) => setPrompt(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
          type="text"
          placeholder="Create with Prompts"
          className="outline-none w-full py-4 px-2 bg-transparent text-white placeholder-zinc-400 text-lg"
        />
        <button
          onClick={handleSubmit}
          className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full"
        >
                 {state.response?.isLoading ? (
                   <FaSpinner className="h-5 w-5 animate-spin text-white" />
                 ) : (
                   <IoSend className="h-5 w-5 text-white" />
                 )}
        </button>
      </div>
    </div>
  );
};

export default Search;
