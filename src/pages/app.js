import React,{Component} from 'react';
import ThemeContainer from '../theme/containers/theme-container'
import PropTypes from 'prop-types'
import * as actions from '../actions/index' 
import { connect } from 'react-redux'
import Home from './home/home'
import Buttons from './ui-elements/buttons'
import  {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

class App extends Component{

    render(){
        return (
            <Router>
            <ThemeContainer>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/buttons" component={Buttons} /> 
                </Switch>
            </ThemeContainer>
            </Router>
        )
    }
}

function mapStateToProps(state,props){
    return {
        currentPage : state.get("pages").get("currentPage")
    }
}

export default connect(mapStateToProps,null)(App);