import React, { Component } from 'react';
import {LOGIN_TEXTS} from '../../../constants/'
import CreateAccount from '../components/login/CreateAccount'
import RememberMe from '../components/login/RememberMe';
import AppInfo from '../components/AppInfo'
import FormTitle from '../components/FormTitle'
import Login from '../components/login/Login'

export default class LoginContainer extends Component{
    state = {
        rememberChecked : false
    }
    handleRemember = ()=>{
        this.setState({rememberChecked : !this.state.rememberChecked})
    }

    render(){
        return (
           <Login>
                <div className="intro col-12 col-md">
                        <AppInfo title={LOGIN_TEXTS.title} description={LOGIN_TEXTS.description} />
                    </div>
                    <div className="form-wrapper col-12 col-md-auto d-flex justify-content-center p-4 p-md-0">
                        <div className="form-content md-elevation-8 h-100 bg-white text-auto py-16 py-md-32 px-12">
                            <FormTitle title={LOGIN_TEXTS.loginTitle} 
                                    description={LOGIN_TEXTS.loginDescription} />
                            <form name="loginForm" noValidate className="mt-8">
                                <div className="form-group mb-4">
                                    <input type="email" className="form-control" id="loginFormInputEmail" aria-describedby="emailHelp" placeholder=" " />
                                    <label htmlFor="loginFormInputEmail">{LOGIN_TEXTS.usernamePlaceholder}</label>
                                </div>
                                <div className="form-group mb-4">
                                    <input type="password" className="form-control" id="loginFormInputPassword" placeholder="Password" />
                                    <label htmlFor="loginFormInputPassword">{LOGIN_TEXTS.passwordPlaceholder}</label>
                                </div>
                                <RememberMe 
                                    handleRemember={this.handleRemember}
                                    rememberChecked={this.state.rememberChecked}
                                    rememberText={LOGIN_TEXTS.remember}
                                    forgotText={LOGIN_TEXTS.forgotPassword}
                                    />
                                <button type="submit" className="submit-button btn btn-block btn-secondary my-4 mx-auto" aria-label="LOG IN">
                                    {LOGIN_TEXTS.btnLoginOn}
                                </button>
                            </form>
                            <CreateAccount 
                                dontHaveAccountText={LOGIN_TEXTS.DontHaveAccount}
                                createAccountText={LOGIN_TEXTS.createAccount}
                            />
                        </div>
                    </div>
          </Login>
        )
    }
}