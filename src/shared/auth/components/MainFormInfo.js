import React from 'react'

const MainInfo = (props) =>(
    <div>
    <div className="title">
         {props.title}
    </div>

    <div className="description pt-2">
        {props.description}
    </div>
    </div>
);

export default MainInfo