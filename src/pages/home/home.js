import React, { Component } from 'react';
import ButtonElement from '../../widgets/elements/buttons/button-element'
class Home extends Component{

    render(){
    return (
         <div>
         <ButtonElement handleClick={this.changePage} type="primary" text="Hello World Home" />
         </div>
    )
    }
}
export default Home;