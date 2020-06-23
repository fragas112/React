import React, {Component} from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxilary'

interface Props  {
    name: string;
    age: number;
    changed?:any;
    click?:any;
};

class Person extends Component<Props>{
    render () {
        console.log('[Person.tsx] rendering...');
        return (
        <Aux>
            <div className={classes.Person}>
                 <p key="l2" onClick={this.props.click}>
                     I`m a {this.props.name} and I am {this.props.age} years old!
                     </p>,
                 <p key="l3">{this.props.children}</p>,
                 <input key="l4"
                        type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name} />
            </div>
         </Aux>
        )
    }
};



export default Person;