import React,{Component} from 'react';
import ThemeContainer from '../../theme/containers/theme-container'
import Home from './home'
import Contact from './contact'
import * as actions from '../../actions/index' 
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

class AppContainer extends Component{

    render(){
        return (
            <ThemeContainer>
                {this.props.currentPage == 0 &&
                <Home /> }
                {this.props.currentPage == 1 &&
                <Contact />
                }
            </ThemeContainer>
        )
    }
}

function mapStateToProps(state,props){
    return {
        currentPage : state.get("pages").get("currentPage")
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);