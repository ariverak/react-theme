import React from 'react';
import image from '../../../assets/images/placeholder.png'
import ButtonElement from '../buttons/button-element'

const BasicCard = (props)=>{
    return (
        <div className="card" style={{width: "30rem"}}>
            <img className="card-img-top" src={image} alt={props.title}/>
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.text}</p>
                <ButtonElement text={props.buttonText} type="primary" />
            </div>
        </div>
    )
}

export default BasicCard;