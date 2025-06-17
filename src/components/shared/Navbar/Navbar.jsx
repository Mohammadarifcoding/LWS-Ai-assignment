import React from 'react';
import logo from '/src/assets/logo.svg'
const Navbar = ({pageChange,page}) => {
    const navLink = [
        {
            name:"Create Image",
            link:"create"
        },
        {
            name:"Downloaded",
            link:"download"
        }
    ]
    return (
        <header className="flex items-center mb-12 justify-between">
            <div className="flex items-center">
                <img src={logo} className="h-10" />
            </div>
            <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
                {
                    navLink.map((nav)=>(
                        <li key={nav.link} onClick={pageChange} className={`hover:text-zinc-200 cursor-pointer transition-all ${page == nav.link ? "font-medium text-zinc-200" : ""}`}>{nav.name}</li>
                    ))
                }
    
            </ul>
        </header>
    );
};

export default Navbar;