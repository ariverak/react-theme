import React, { Component } from 'react';
import {LOGIN_TEXTS} from '../../../constants/'
import CreateAccount from '../components/CreateAccount'
import RememberMe from '../components/RememberMe';
import MainInfo from '../components/MainInfo'
import {Link} from 'react-router-dom'

export default class FormLogin extends Component{
    state = {
        rememberChecked : false
    }
    handleRemember = ()=>{
        this.setState({rememberChecked : !this.state.rememberChecked})
    }

    render(){
        return (
            <div id="login-v2" className="row no-gutters">
                <div className="intro col-12 col-md">
                    <MainInfo title={LOGIN_TEXTS.title} description={LOGIN_TEXTS.description} />
                </div>
                <div className="form-wrapper col-12 col-md-auto d-flex justify-content-center p-4 p-md-0">
                    <div className="form-content md-elevation-8 h-100 bg-white text-auto py-16 py-md-32 px-12">
                        <div className="title h5">{LOGIN_TEXTS.formTitle}</div>
                        <div className="description mt-2">{LOGIN_TEXTS.formDescription}</div>
                        <form name="loginForm" noValidate className="mt-8">
                            <div className="form-group mb-4">
                                <input type="email" className="form-control" id="loginFormInputEmail" aria-describedby="emailHelp" placeholder=" " />
                                <label htmlFor="loginFormInputEmail">{LOGIN_TEXTS.usernamePlaceholder}</label>
                            </div>
                            <div className="form-group mb-4">
                                <input type="password" className="form-control" id="loginFormInputPassword" placeholder="Password" />
                                <label htmlFor="loginFormInputPassword">{LOGIN_TEXTS.passwordPlaceholder}</label>
                            </div>
                            <RememberMe handleRemember={this.handleRemember} rememberChecked={this.state.rememberChecked} />
                            <button type="submit" className="submit-button btn btn-block btn-secondary my-4 mx-auto" aria-label="LOG IN">
                                LOG IN
                            </button>
                        </form>
                        <CreateAccount />
                    </div>
                </div>
            </div>
        )
    }
}