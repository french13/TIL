import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let 이름 :string[] = ['kim', 'park']

  function test(x : number) : number{
    return x+2
  }
  
type Member ={
  name : string,
  age : number
}

const john:Member = {
  name : 'kim',
  age : 12
}


  return (
    <div className="App">
    
    </div>
  );
}

export default App;
