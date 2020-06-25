import React, {PureComponent, ReactNode} from 'react';
import Person from './Person/Person';

interface Props {
    persons: any;
    clicked(index: number):void;
    changed(event: any, id: string | number | undefined):void;
    isAuthenticated?:any;
}

class Persons extends PureComponent<Props>{ 
    getSnapshotBeforeUpdate(prevProps:any, prevState:boolean) {
        console.log('[Persons.tsx] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }
    componentDidUpdate(prevProps: any, prevState: boolean, snapshot: any) {
        console.log('[Persons.tsx] componentDidUpdate');
        console.log(snapshot);
    }
    componentWillUnmount (){
        console.log('[Persons.tsx] componentWilUnmount');
    }

    render () {
        console.log('[Persons.tsx] rendering...');
        return this.props.persons.map((person: { 
            name: string; 
            age: number; 
            id: string | number | undefined; 
            }, index: number) => {
        return ( 
            <Person  
                click={()=> this.props.clicked(index)}
                name={person.name}
                age={person.age} 
                key={person.id}
                changed={(event:any)=> this.props.changed(event, person.id)}
                isAuth={this.props.isAuthenticated}
            />
        );  
    });
    }
}

export default Persons;