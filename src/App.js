import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterMeter from './components/HookCounterMeter';



function App() {
  return (
    <div className="App">
      <h1>hello everyone !!!</h1>
      {/* <ClassCounter />  */}
      {/* <HookCounter />  */}
      <HookCounterMeter />
    </div>
  );
}

export default App;
