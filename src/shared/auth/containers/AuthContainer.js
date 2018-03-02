import React, { Component } from 'react';
import LoginContainer from './LoginContainer'
import ResetContainer from './ResetContainer'
import RegisterContainer from './RegisterContainer'
import  {BrowserRouter,Switch,Route} from 'react-router-dom'

export default class AuthContainer extends Component{
    
    render(){
        const style= {
           height : "100vh"
        }
        return (
            <BrowserRouter>
            <div className="content" style={style}>
                    <Switch>
                        <Route path="/" exact component={LoginContainer} />
                        <Route path="/reset" component={ResetContainer} />
                        <Route path="/register" component={RegisterContainer} />
                    </Switch>
            </div>
        </BrowserRouter>
        )
    }
}