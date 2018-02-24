import React from 'react';
import PropTypes from 'prop-types'

const ButtonElement = (props)=>(
  <button type="button" className={`btn btn-${props.type} fuse-ripple-ready`}>{props.text}</button>
)

ButtonElement.propTypes = {
    type : PropTypes.oneOf(["primary","secondary","success","danger",
    "warning","info","light","dark","link"]).isRequired,
    text: PropTypes.string.isRequired
}

export default ButtonElement;