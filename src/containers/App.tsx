import React from 'react';
import classes from './App.module.css';
import Person from '../Components/Persons/Person/Person';
import Cockpit from '../Components/Cockpit/Cockpit';
import Persons from '../Components/Persons/Persons';

// const StyledButton = styled.button<{alt:boolean}>`
//   background-color: ${props => props.alt ? 'red':'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
  
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon':'lightgreen'};
//     color: black;
//   }
// `;
interface Props {
  appTitle:string;
}
class App extends React.Component<Props> {
 constructor(props: Readonly<Props>) {
   super(props);
   console.log('[App.tsx] constructor');
 }
    state = {
      persons : [
      {id: '1', name:'Max', age:28},
      {id: '2', name:'Man', age:38},
      {id: '3', name:'Mani', age:30}
      ], 
      showPersons: false,
      showCockpit: true
    };

    static getDerivedStateFromProps(props:string, state:string) {
      console.log('[App.tsx] getDerivedStateFromProps', props);
      return state;
    }
    // componentWillMount () {
    //   console.log('[App.tsx] componentWillMount');
    // }

    componentDidMount() {
      console.log('[App.tsx] componentDidMount');
    }
    shouldComponentUpdate(nextProps: any, nextState: boolean){
      console.log('[App.tsx] shouldComponentUpdate');
      return true;
    }
    componentDidUpdate () {
      console.log('[App.tsx] componentDidUpdate');
    }

    deletePersonHandler = (personIndex:number) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons:persons});
    }
     
    nameChangeHandler = (event:React.ChangeEvent<HTMLInputElement>, id: number| string)=> {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });
      const person = {...this.state.persons[personIndex]};
      person.name = event.target.value;
      const persons=[...this.state.persons];
      persons[personIndex]= person;

      this.setState( {persons:         [
          {name: 'Maxi' , age:28},
          {name: event.currentTarget.value, age:89},
          {name:'Mani', age:5}
          ]
      });
    }
    togglePersonsHandler = ():void => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }
    render(){
      console.log('[App.tsx] render');
      const appTitle = {
        title:this.props.children
      }
      let persons = null;
      let btnClass = [classes.Button];

      if (this.state.showPersons) {
        persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}/>;
      }

    return (
      <div className={classes.App}>
        <button onClick={()=> {this.setState({showCockpit: false})}}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}/>
        :null}
      {persons} 
      </div>

    );
  }
}


export default App;
 