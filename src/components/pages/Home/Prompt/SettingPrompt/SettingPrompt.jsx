import React, { useContext } from 'react';
import { PromptContext } from '../../../../../context';

const SettingPrompt = () => {
    const {state,dispatch} = useContext(PromptContext)

    const sizes = [
        {label : "1:1", height: 1024, width: 1024 },
        {label : "16:9", height: 768, width: 1280 },
        {label : "4:3", height: 1024, width: 768 },
        {label : "3:2", height: 768, width: 1024 },

    ]
    return (
<div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
  <div className="flex items-center justify-between mb-4">
    <h4 className="font-medium">Advanced Settings</h4>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Model Selection */}
    <div>
      <label htmlFor="model" className="block text-sm font-medium text-zinc-700 mb-1">Model</label>
      <select id="model" className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
        <option className="bg-zinc-900" value="flux" selected>Flux</option>
        <option className="bg-zinc-900" value="turbo">Turbo</option>
      </select>
    </div>
    {/* Seed Input : Auto Generated, readonly for user */}
    <div>
      <label htmlFor="seed" className="block text-sm font-medium text-zinc-700 mb-1">Seed (for reproducible
        results)</label>
      <input type="number" id="seed" disabled="true" className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Random" />
    </div>
    {/* Width Input */}
    <div>
      <label htmlFor="width" className="block text-sm font-medium text-zinc-700 mb-1">Width</label>
      <input type="number" id="width" defaultValue={1024} className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />
    </div>
    {/* Height Input */}
    <div>
      <label htmlFor="height" className="block text-sm font-medium text-zinc-700 mb-1">Height</label>
      <input type="number" id="height" defaultValue={1024} className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />
    </div>
    {/* Aspect Ratio Presets */}
    <div>
      <label className="block text-sm font-medium text-zinc-700 mb-1">Aspect Ratio Presets</label>
      <div className="flex flex-wrap gap-2">
        {
            sizes.map((size)=> <button onClick={() => dispatch({type:'SET_SETTING',payload: {...state.setting,
        width: size.width,
        height: size.height}})} key={size.label} className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors">{size.label}</button> )
        }
       
      </div>
    </div>
    {/* No Logo Toggle */}
  </div>
</div>

    );
};

export default SettingPrompt;