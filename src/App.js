import React from 'react';
import Tweet from './Tweet'



function App() {

  
  const counter = 0;
  return (
    <div className='app'>
      
      <Tweet name="Bruce Wayne" message="Didn't you get the Memo!"/> 
      <Tweet name= "John Snow" message="I don't want it!"/> 
      <Tweet name= "Batman" message="Because, I am Batman!"/> 
      <Tweet name= "Superman" message="Saved the day!"/> 
    </div>
  );

}


export default App;

/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/