import React from 'react'
import {Link} from 'react-router-dom'


const CreateAccount = (props) =>(
    <div className="register d-flex flex-column flex-sm-row align-items-center justify-content-center mt-8 mb-6 mx-auto">
    <span className="text mr-sm-2">{props.dontHaveAccountText}</span>
    <Link className="link text-secondary" to="register">
     {props.createAccountText}
    </Link>
    </div>
);

export default CreateAccount
