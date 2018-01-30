import React from 'react';

export default function ButttonElement(props){
    return (
     <button type="button" className={`btn btn-${props.type} 
     fuse-ripple-ready`}>{props.text}</button>
    )
}