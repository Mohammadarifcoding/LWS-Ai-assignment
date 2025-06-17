import React, { useContext } from 'react';
import { PromptContext } from '../../../../../context';
import ModelInput from './ModelInput/ModelInput';
import SelectSize from './SelectSize/SelectSize';

const SettingPrompt = () => {
    const {state,dispatch} = useContext(PromptContext)
    return (
<div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
  <div className="flex items-center justify-between mb-4">
    <h4 className="font-medium">Advanced Settings</h4>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Model Selection */}
     <ModelInput/>
    {/* Seed Input : Auto Generated, readonly for user */}
    <div>
      <label htmlFor="seed" className="block text-sm font-medium text-zinc-700 mb-1">Seed (for reproducible
        results)</label>
      <input type="number" id="seed" disabled="true" className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Random" />
    </div>
    {/* Width Input */}
    <div>
      <label htmlFor="width" className="block text-sm font-medium text-zinc-700 mb-1">Width</label>
      <input onChange={(e) => dispatch({type:'UPDATE_SIZE',payload: {width: Number(e.target.value), height: state.setting.height}})} type="number" id="width" defaultValue={1024} className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />
    </div>
    {/* Height Input */}
    <div>
      <label htmlFor="height" className="block text-sm font-medium text-zinc-700 mb-1">Height</label>
      <input onChange={(e) => dispatch({type:'UPDATE_SIZE',payload: {width: state.setting.width, height: Number(e.target.value)}})} type="number" id="height" defaultValue={1024} className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />
    </div>
    {/* Aspect Ratio Presets */}
<SelectSize/>
    {/* No Logo Toggle */}
  </div>
</div>

    );
};

export default SettingPrompt;