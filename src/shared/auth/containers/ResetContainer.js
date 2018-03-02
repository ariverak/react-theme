import React, { Component } from 'react';
import {LOGIN_TEXTS} from '../../../constants/'
import Reset from '../components/reset/Reset'

export default class ResetContainer extends Component{
    render(){
        return (
            <Reset>
                <div class="form-wrapper md-elevation-8 p-8">
                    <div class="logo bg-secondary">
                        <span>F</span>
                    </div>
                    <div class="title mt-4 mb-8">Reset your password</div>
                    <form name="resetPasswordForm" novalidate>
                        <div class="form-group mb-4">
                            <input type="email" class="form-control" id="resetPasswordFormInputEmail" aria-describedby="emailHelp"
                                   placeholder=" " required/>
                            <label for="resetPasswordFormInputEmail">Email address</label>
                        </div>
                        <div class="form-group mb-4">
                            <input type="password" class="form-control" id="registerFormInputPassword" required/>
                            <label for="registerFormInputPassword">Password</label>
                        </div>
                        <div class="form-group mb-4">
                            <input type="password" class="form-control" id="registerFormInputPasswordConfirm" required/>
                            <label for="registerFormInputPasswordConfirm">Password (Confirm)</label>
                        </div>
                        <button type="submit" class="submit-button btn btn-block btn-secondary mt-8 mb-4 mx-auto"
                                aria-label="RESET MY PASSWORD">
                            RESET MY PASSWORD
                        </button>
                    </form>
                </div>
            </Reset>
        )
    }
}