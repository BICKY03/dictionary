import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const data = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

const DictionaryApp = () => {
  const [inputText, setInputText] = useState('');
  const [dictionary, setDictionary] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (inputText.trim() === '') {
      setDictionary("Please enter a word to search.");
      return;
    }

    const entry = data.find(item => item.word.toLowerCase() === inputText.toLowerCase());

    if (entry) {
      setDictionary(entry.meaning);
    } else {
      setDictionary("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Search for a word' 
          value={inputText} 
          onChange={handleChange} 
        />
        <button type="submit">Search</button>
      </form>

      <div>Definition: {dictionary}</div>
    </div>
  );
}

export default DictionaryApp;
