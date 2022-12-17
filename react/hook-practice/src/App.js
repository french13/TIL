
import {useState} from 'react';
import './App.css';

function App() {
  const [stateTest, setStateTest] = useState('스테이츠테스트')
  
  const changeState = () =>{
    setStateTest('스테이츠테스트 변경')
  }

  return (
    <div className="App">
      <div>useState : {stateTest} </div>
      <button onClick={changeState}>change </button>
    </div>
  );
}

export default App;
