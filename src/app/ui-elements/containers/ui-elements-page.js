import React from 'react';
import ButtonElement from '../../../widgets/elements/buttons/button-element'
import BasicCard from '../../../widgets/elements/cards/basic-card'

const Buttons = (props)=>{
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    
    return (
         <div>
         <BasicCard title="Cardview" text={lorem} buttonText="hola" />
         </div>
    )
}

export default Buttons;