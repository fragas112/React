import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
    state = {
      persons : [
      {name:'Max', age:28},
      {name:'Man', age:38},
      {name:'Mani', age:30}
      ] 
    };
    switchNameHandler = (newName:string) => {
      // console.log ('was clicked!');
      this.setState( {persons: 
        [
          {name: newName , age:28},
          {name:'Man', age:38},
          {name:'Mani', age:3000}
          ]
      });
    }
    nameChangeHandler = (e: React.FormEvent<HTMLInputElement>)=> {
      this.setState( {persons: 
        [
          {name: 'Maxi' , age:28},
          {name: e.currentTarget.value, age:89},
          {name:'Mani', age:5}
          ]
      });
    }
    render(){
      const style = {
        backgroundColor:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer'

      }

    return (
      // React.creat eElement('div', {className: "App"}, React.createElement('h1', null, 'Dose this work now?'))
      <div className="App">
        <h1>Hello</h1>
        <p>This is really working</p>
        <button
        style={style} 
        onClick={()=>this.switchNameHandler('Maximiliant')}>Switch Name</button>
        <Person name = {this.state.persons[0].name} 
                age={this.state.persons[0].age} />
        <Person name ={this.state.persons[1].name} 
                age={this.state.persons[1].age}
               changed={this.nameChangeHandler} >My hobbies: Racing</Person>
        <Person name ={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
      </div>
    );
  }
}


export default App;
 