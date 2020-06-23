import React, { useEffect } from 'react';
import classes from '../Cockpit/Cockpit.module.css';

interface Props {
    title:string;
    personsLength: number;
    clicked: ((event: React.MouseEvent<HTMLButtonElement>) => void);
    showPersons: boolean;
}

const Cockpit = (props:Props) => {
  useEffect(()=> {
   console.log('[Cockpit.tsx] useEffect');
   setTimeout(() => {
      alert('Saved data to cloud'); 
    },1000);
    return () => {
      console.log('[Cockpit.tsx] cleanup work in useEffect');
    }
  }, []);
    useEffect (() => {
      console.log('[Cockpit.tsx] 2nd useEfect');
      return () => {
        console.log('[Cockpit.tsx] cleanup work in 2nd useEffect')
      }
    })

    const assignedClasses = [];
    let btnClass = [classes.Button];
    if (props.showPersons) {
        btnClass.push(classes.Red);
    }
    if (props.personsLength <= 3) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 2){
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p> 
        <button className={btnClass.join(' ')}
        onClick={props.clicked}>Switch Name
        </button>
      </div>
    );
}

export default React.memo(Cockpit);


