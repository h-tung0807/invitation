import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const [showEmojis, setShowEmojis] = useState(false);

  const toggleEmojis = () => {
    emailjs.init({
      publicKey: 'BVBZ8cjcS1Azpzgaq'
    });
    emailjs.send('service_p62y7os', 'template_zbq8wt5').then((response) => {
      
        alert('Email sent successfully!');
      
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={toggleEmojis}>
          {showEmojis ? 'Hide Emojis' : 'Show Emojis'}
        </button>
        {showEmojis && (
          <div className="emoji-layer">
            <span role="img" aria-label="smile">😊</span>
            <span role="img" aria-label="heart">❤️</span>
            <span role="img" aria-label="thumbs up">👍</span>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
