import React from 'react';
import './no-found-box.css'
// import PropTypes from 'prop-types'

const NoFoundBox = (props)=> (
    <div className="NoFoundBox-Container">
        <img src={require("../../../assets/images/page_no_found.jpg")}/>
    </div>
)
export default NoFoundBox;