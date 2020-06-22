import React from 'react';
import './App.css';
import Person from './Person/Person';

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

class App extends React.Component {
    state = {
      persons : [
      {id: '1', name:'Max', age:28},
      {id: '2', name:'Man', age:38},
      {id: '3', name:'Mani', age:30}
      ], 
      showPersons: false
    };
    deletePersonHandler = (personIndex:number) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons:persons});
    }
     
    nameChangeHandler = (event:React.ChangeEvent<HTMLInputElement>, id: number| string)=> {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons [personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
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
      const style = {

      } 
      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={this.deletePersonHandler.bind(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event:any)=> this.nameChangeHandler(event, person.id)}/>
            })}
        </div> 
        );
      }

      const classes = [];
      if (this.state.persons.length <= 3) {
        classes.push('red');
      }
      if (this.state.persons.length <= 2){
        classes.push('bold');
      }
    return (
      <div className="App">
        <h1>Hello</h1>
        <p className={classes.join(' ')}>This is really working</p> 
        <button className="Button"
        onClick={this.togglePersonsHandler}>Switch Name
        </button>
      {persons} 
      </div>

    );
  }
}


export default App;
 