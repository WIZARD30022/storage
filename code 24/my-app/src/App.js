import logo from './logo.svg';
import { useState } from 'react';
import "./App.css"
import navbar from './components/navbar';
import footer from './components/footer';

function App() {
  const [value, setvalue] = useState(0)


  return (
    <div className="App">
      <navbar/>
      <div className='value'>{value}</div>
      <button onClick={() => {
        setvalue(value + 1)
      }}>Click me</button>
      <footer/>
    </div>
  );
}

export default App;
