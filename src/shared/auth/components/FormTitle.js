import React from 'react'

const FormTitle = (props) =>(
    <div>
     <div className="title h5">{props.title}</div>
     <div className="description mt-2">{props.description}</div>
    </div>
);

export default FormTitle