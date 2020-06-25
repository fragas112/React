import React, {Component} from 'react';
import propTypes from 'prop-types';

import classes from './Person.module.css';
import WithClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Auxilary';
import AuthContext from '../../../context/auth-context'

interface Props  {
    name: string;
    age: number;
    changed?:any;
    click:any;
    isAuth:any;
};

class Person extends Component<Props>{
    inputElement:any;



    componentDidMount() {
        this.inputElement.focus();
    }

    render () {
        console.log('[Person.tsx] rendering...');
        return (
        <Aux>
            <AuthContext.Consumer>
            {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please Log In</p>
            }
            </AuthContext.Consumer>
            <p onClick={this.props.click}>
                I`m a {this.props.name} and I am {this.props.age} years old!
                </p>,
            <p key="l3">{this.props.children}</p>,
            <input key="l4"
                ref={(inputEl)=>{this.inputElement= inputEl}}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
         </Aux>
        )
    }
};


export default WithClass(Person, classes.Person);