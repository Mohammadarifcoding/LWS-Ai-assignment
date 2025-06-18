import React, { useContext } from 'react';
import { PromptContext } from '../../../../../../context';

const ModelInput = () => {
  const { model, dispatch, state } = useContext(PromptContext);
  return (
    <div>
      <label htmlFor="model" className="block text-sm font-medium text-zinc-700 mb-1">
        Model
      </label>
      <select
        value={state.setting.model}
        id="model"
        onChange={(e) => dispatch({ type: 'SET_MODEL', payload: e.target.value })}
        className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
      >
        {model.map((m) => (
          <option key={m} className="bg-zinc-900" value={m} selected>
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModelInput;
