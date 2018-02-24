import React from 'react';
import ButtonElement from '../../../widgets/elements/buttons/button-element'
import ButtonFab from '../../../widgets/elements/buttons/button-fab'
import BasicCard from '../../../widgets/elements/cards/basic-card'

const Buttons = (props)=>{
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    
    return (
         <div>
          <ButtonElement />
          <ButtonFab iconName="add" />

          {/* <BasicCard 
            image="https://cms-assets.tutsplus.com/uploads/users/41/posts/25951/image/material-design-background-1.jpg"
            title="Cardview" text={lorem} buttonText="hola" /> */}
         </div>
    )
}

export default Buttons;