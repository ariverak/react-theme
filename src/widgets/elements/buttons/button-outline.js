import React from 'react';
import PropTypes from 'prop-types'

const ButtonOutline = (props)=>{
    const {handleClick,type,text,linkTo} = props; 
        return (
            <button type="button" onClick={handleClick}
             className={`btn btn-outline-${props.type} fuse-ripple-ready`}>
             {props.text}</button>
           )
}
ButtonOutline.propTypes = {
    type : PropTypes.oneOf(["primary","secondary","success","danger",
    "warning","info","light","dark","link"]).isRequired,
    text: PropTypes.string.isRequired
}
export default ButtonOutline;