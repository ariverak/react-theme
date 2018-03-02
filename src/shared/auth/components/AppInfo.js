import React from 'react'

const AppInfo = (props) =>(
    <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-left py-16 py-md-32 px-12"> 
        <div className="logo bg-secondary mb-8">
            <span>L</span>
        </div>
        <div className="title">
         {props.title}
        </div>
        <div className="description pt-2">
            {props.description}
        </div>
     </div>
);

export default AppInfo