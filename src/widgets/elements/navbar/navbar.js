import React from 'react';

const Navbar = (props)=>{
    return (
        <nav id="toolbar" className="fixed-top bg-white">
            {props.children}
         </nav>
    )
}

export default Navbar;