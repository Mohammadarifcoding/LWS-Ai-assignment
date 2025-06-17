import React, { useContext, useState } from 'react';
import Search from './Search/Search';
import SettingPrompt from './SettingPrompt/SettingPrompt';
import { PromptContext } from '../../../../context';
import useGetModel from '../../../../hooks/useGetModel';

const Prompt = () => {
    const {state,dispatch} = useContext(PromptContext)

     console.log(state)
    return (
        <div>
            <Search />
            <SettingPrompt/>
        </div>
    );
};

export default Prompt;