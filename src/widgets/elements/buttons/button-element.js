import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const ButtonElement = (props)=>{
    let {handleClick,type,text,linkTo} = props;
    if(linkTo){
        return (
            <Link to={linkTo}>
                <button type="button" className={`btn btn-${type} fuse-ripple-ready`}>{text}</button>
            </Link>
       )
    }else{
       return (
       <button type="button" className={`btn btn-${type} fuse-ripple-ready`}>{text}</button>
       )
    }
}

ButtonElement.propTypes = {
    type : PropTypes.oneOf(["primary","secondary","success","danger",
    "warning","info","light","dark","link"]).isRequired,
    text: PropTypes.string.isRequired
}

export default ButtonElement;