import React, { ReactNode } from 'react';

export interface Props {
    children:any;
    classes?:string;
}

const Aux = (props:Props) => props.children;

export default Aux;