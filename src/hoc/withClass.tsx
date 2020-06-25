import React, { ReactNode } from 'react'


const WithClass = (WrappedComponent:any, className:string)  => {
    return (props:any) =>(
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};

export default WithClass;