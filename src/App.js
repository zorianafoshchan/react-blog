import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {

 const [posts, setPosts] = useState([
  {
   id: 1,
   title: "My first Post",
   datetime: "July 02, 2023 12:36:25 AM",
   body: "",
  },
  {
   id: 2,
   title: "My second Post",
   datetime: "July 04, 2023 15:36:55 AM",
   body: "Some text"
  },
  {
   id: 3,
   title: "My third Post",
   datetime: "July 08, 2023 10:36:25 AM",
   body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aspernatur culpa explicabo obcaecati in cupiditate"
  },
  {
   id: 4,
   title: "My fourth Post",
   datetime: "July 22, 2023 22:22:22 AM",
   body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aspernatur culpa explicabo obcaecati in cupiditate"
  },

])

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
