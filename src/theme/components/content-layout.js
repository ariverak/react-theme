import React from 'react';

const ContentLayout = (props)=>{
    return (
    <div className="content">
        {props.children}
     </div>
    )
}

export default ContentLayout;