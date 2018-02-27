import React, { Component } from 'react';
import ButtonElement from '../../../widgets/elements/buttons/button-element'
import {Link} from 'react-router-dom'
class Home extends Component{
    componentDidMount(){

        console.log(this.props)
    }
    render(){
    return (
         <div>
         <Link to="/ui-elements-page">
            <ButtonElement linkTo="buttons" type="primary" text="Hello World Home" />
         </Link>
         </div>
    )
    }
}
export default Home;