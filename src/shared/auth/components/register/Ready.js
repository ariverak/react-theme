import React from 'react'
import {Link} from 'react-router-dom'

const SocialAccess = (props) =>(
    <div className="login d-flex flex-column flex-sm-row align-items-center justify-content-center mt-8 mb-6 mx-auto">
    <span className="text mr-sm-2"> {props.readyLoginText}</span>
    <Link to="/" className="link text-secondary">
        {props.readyLoginLinkText}
    </Link>
    </div>
);

export default SocialAccess
