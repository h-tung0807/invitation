import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

function App() {
  const [showEmojis, setShowEmojis] = useState(false);

  const toggleEmojis = () => {
    
  };

  return (
    <div className="blurred-background">
    <div className="centered-content">
      <img src="https://media1.tenor.com/m/whAhQj8irG8AAAAd/lady-and-the-tramp-dogs.gif"/>
    </div>
  </div>
    // <div className="App">
    //   <img className="top-image" src="https://media1.tenor.com/m/whAhQj8irG8AAAAd/lady-and-the-tramp-dogs.gif" alt="this slowpoke moves" width="250" />
    //   <div style={{
    //     display: 'grid',
    //     placeContent: 'center',
    //     backgroundColor: 'lightblue',
    //   }}>
    //     <motion.button
    //       className="box"
    //       whileHover={{ scale: [null, 1.5, 1.4] }}
    //       transition={{ duration: 0.3 }}
    //       style={{
    //         backgroundColor: 'black',
    //       }}
    //     />
    //   </div>
    // </div>
  );
}

export default App;
