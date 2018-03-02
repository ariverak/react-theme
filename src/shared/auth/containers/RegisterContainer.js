import React, { Component } from 'react';
import {LOGIN_TEXTS} from '../../../constants/'
import AppInfo from '../components/AppInfo'
import FormTitle from '../components/FormTitle'
import Ready from '../components/register/Ready'
import Register from '../components/register/Register'

export default class RegisterContainer extends Component{
   
    render(){
        return (
        <Register>
            <div id="register-v2" className="row no-gutters">
                    <div className="intro col-12 col-md">
                        <AppInfo title={LOGIN_TEXTS.title} description={LOGIN_TEXTS.description} />
                    </div>
                    <div className="form-wrapper col-12 col-md-auto d-flex justify-content-center p-4 p-md-0">
                        <div className="form-content md-elevation-8 h-100 bg-white text-auto py-16 py-md-32 px-12">
                            <FormTitle title={LOGIN_TEXTS.registerTitle} 
                                    description={LOGIN_TEXTS.registerDescription} />
                            <form name="registerForm" noValidate className="mt-8">
                                <div className="form-group mb-4">
                                    <input type="text" className="form-control" id="registerFormInputName" aria-describedby="nameHelp" />
                                    <label htmlFor="registerFormInputName">
                                    {LOGIN_TEXTS.registerPlaceholderInput1}</label>
                                </div>
                                <div className="form-group mb-4">
                                    <input type="email" className="form-control" id="registerFormInputEmail" aria-describedby="emailHelp" />
                                    <label htmlFor="registerFormInputEmail">
                                    {LOGIN_TEXTS.registerPlaceholderInput2}</label>
                                </div>
                                <div className="form-group mb-4">
                                    <input type="password" className="form-control" id="registerFormInputPassword" />
                                    <label htmlFor="registerFormInputPassword">
                                    {LOGIN_TEXTS.registerPlaceholderInput3}</label>
                                </div>
                                <div className="form-group mb-4">
                                    <input type="password" className="form-control" id="registerFormInputPasswordConfirm" />
                                    <label htmlFor="registerFormInputPasswordConfirm">
                                    {LOGIN_TEXTS.registerPlaceholderInput4}</label>
                                </div>
                                <button type="submit" className="submit-button btn btn-block btn-secondary my-4 mx-auto" aria-label="LOG IN">
                                    {LOGIN_TEXTS.btnCreateAccount}
                                </button>
                            </form>
                            <Ready
                                readyLoginText={LOGIN_TEXTS.readyLogin}
                                readyLoginLinkText={LOGIN_TEXTS.readyLoginLink}
                                />
                        </div>
                    </div>
                </div>
            </Register>
        )
    }
}