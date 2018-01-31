import React, { Component } from 'react';
import ButtonElement from '../../widgets/elements/buttons/button-element'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/index'

class Home extends Component{

    changePage = ()=>{
        this.props.actions.changePage(1)
    }
    render(){
    return (
         <div>
         <ButtonElement handleClick={this.changePage} type="primary" text="Hello World Home" />
         </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home);