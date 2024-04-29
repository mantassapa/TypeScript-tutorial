import React, { useState } from 'react';
import './App.css';
import Demo from './components/Demo';
import Counterfu from './components/tasks/Counterfu';

function App() {
  const [number, setNumber] = useState<number>(0)

  return (
    <div className="App">
      <header className="App-header">


      </header>
      <Demo firstnam="name"/>
      <Counterfu setNumber={setNumber}/>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
