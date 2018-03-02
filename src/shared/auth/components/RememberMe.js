import React from 'react'
import './remember.css'
import {LOGIN_TEXTS} from '../../../constants'
import {Link} from 'react-router-dom'
import MdCheckbox from "react-icons/lib/md/check-box"
import MdCheckboxOutline from "react-icons/lib/md/check-box-outline-blank"

const RememberMe = (props) =>(
    <div className="remember-forgot-password row no-gutters align-items-center justify-content-between pt-4">
    <div  className="form-check remember-me mb-4">
        <label className="form-check-label form-check-label2">
            <div className="form-check-icon fuse-ripple-ready">
                {props.rememberChecked ?
                <MdCheckbox onClick={props.handleRemember} size={25} color="gray" />
                :
                <MdCheckboxOutline onClick={props.handleRemember} size={25} color="gray" />
                }
            </div>
            <span className="form-check-description">{LOGIN_TEXTS.remember}</span>
        </label>
    </div>
      <Link className="forgot-password text-secondary mb-4" to="reset">
        {LOGIN_TEXTS.forgotPassword}
      </Link>
    </div>
);

export default RememberMe
