import React from 'react';
import PropTypes from 'prop-types'

const ButtonFab = (props)=>{
   const Icon = require(`react-icons/lib/md/${props.iconName}`)
   return (
    <button type="button" className="btn btn-primary btn-fab">
               <Icon size={25} />
    </button>
   )
}

ButtonFab.propTypes = {
    iconName : PropTypes.string.isRequired
}

export default ButtonFab