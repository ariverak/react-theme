import React, { Component } from 'react';
import MainInfo from '../components/MainInfo'
import FormLogin from './FormLogin'
import FormReset from './FormReset'
import FormRegister from './FormRegister'
import {LOGIN_TEXTS} from '../../../constants/'
import  {BrowserRouter, StaticRouter,Switch,Route,Redirect} from 'react-router-dom'

export default class AuthContainer extends Component{
    render(){
        const title = "";
        return (
            <BrowserRouter>
            <div className="content">
                    <Switch>
                        <Route path="/" exact component={FormLogin} />
                        <Route path="/reset" component={FormReset} />
                        <Route path="/register" component={FormRegister} />
                    </Switch>
            </div>
        </BrowserRouter>
        )
    }
}