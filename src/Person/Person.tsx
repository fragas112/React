import React from 'react';
import './Person.css';

interface Person  {
    name: string;
    age: number;
    children?: string;
    click?:any;
    changed?:any;
};

const person =  (props:Person) => {
    return (
        <div className="Person">
             <p onClick={props.click}>I`m a {props.name} and I am {props.age} years old!</p>
             <p>{props.children}</p>
             <input type="text" onChange={props.changed} />
        </div>
    )
};

export default person;