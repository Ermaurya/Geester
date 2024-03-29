/*The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
In this example, we have an expensive function that runs on every render. When changing the count or adding a todo, you will notice a delay in execution. */
//Example=>:

import './App.css';
import React, {useState} from 'react';

function App() {  
    const [number, setNumber] = useState(0)
    const squaredNum =  squareNum(number);
    const [counter, setCounter] = useState(0);
    
   
    const onChangeHandler = (e) => {
      setNumber(e.target.value);
    }
      
    const counterHander = () => {
      setCounter(counter + 1);
    }
    return (
      <div className="App">
        <h1>Welcome to Geekster</h1>
        <input type="number" placeholder="Enter a number" value={number} onChange={onChangeHandler}>
        </input>
          
        <div>OUTPUT: {squaredNum}</div>
        <button onClick= {counterHander}>Counter ++</button>
        <div>Counter : {counter}</div>
      </div>
    );
  }
  function squareNum(number){
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
  }

export default App;
