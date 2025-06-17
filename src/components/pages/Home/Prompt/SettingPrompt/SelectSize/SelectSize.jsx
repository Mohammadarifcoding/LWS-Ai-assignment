import React, { useContext } from 'react';
import { PromptContext } from '../../../../../../context';

const SelectSize = () => {
     const {state,dispatch} = useContext(PromptContext)
        const sizes = [
        {label : "1:1", height: 1024, width: 1024 },
        {label : "16:9", height: 768, width: 1280 },
        {label : "4:3", height: 1024, width: 768 },
        {label : "3:2", height: 768, width: 1024 },
    ]
    return (
    <div>
      <label className="block text-sm font-medium text-zinc-700 mb-1">Aspect Ratio Presets</label>
      <div className="flex flex-wrap gap-2">
        {
            sizes.map((size)=> <button onClick={() => dispatch({type:'UPDATE_SIZE',payload: {width: size.width,
        height: size.height}})} key={size.label} className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors">{size.label}</button> )
        }
       
      </div>
    </div>
    );
};

export default SelectSize;