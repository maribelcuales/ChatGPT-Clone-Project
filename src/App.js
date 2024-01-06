import { useState } from 'react';

import Message from "./components/Message";
import Input from "./components/Input";
import History from "./components/History";
import Clear from "./components/Clear"; 

import './App.css';

export default function App() {
  const [input, setInput] = useState(""); 
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]); 

  return (
    <div className="App">
      <div className="Column">
        <h3 className="Title">Chat Messages</h3>
        <div className="Content">
          {messages.map((el, i) => {
            return <Message key={i} role={el.role} content={el.content} />;
          })}
        </div>
        <Input 
          value={value}
          onChange={(e) => setInput(e.target.value)}
          onClick={input ? handleSubmit : undefined}
        />
      </div>
      <div className="column">
        <h3 className="Title">History</h3>
        <div className="Content">
          {history.map((el, i) => {
            return (
              <History 
                key={i}
                question={el.question}
                onClick={() => 
                  setMessages([
                    { role: "user", content: history[i].question },
                    { role: "assistant", content: history[i].answer },
                  ])
                }
              />
            );
          })};
        </div>
        <Clear onClick={clear} />
      </div>
    </div>
  );
}



/*
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
