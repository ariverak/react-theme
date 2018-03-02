import React from 'react'
import {Link} from 'react-router-dom'
import {LOGIN_TEXTS} from '../../../constants'


const CreateAccount = (props) =>(
    <div className="register d-flex flex-column flex-sm-row align-items-center justify-content-center mt-8 mb-6 mx-auto">
    <span className="text mr-sm-2">{LOGIN_TEXTS.DontHaveAccount}</span>
    <Link className="link text-secondary" to="register">
     {LOGIN_TEXTS.createAccount}
    </Link>
    </div>
);

export default CreateAccount
