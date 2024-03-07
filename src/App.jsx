import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [translatedMessage, setTranslatedMessage] = useState('');

    async function translateHandle() {
    try {
      const response = await axios.post('http://localhost:8000/translate', { message });
      setTranslatedMessage(response.data.translated_message.content);
    } catch (error) {
        alert('não foi possivel traduzir')
    }
  };

  return (
    <section>
      <header>
        <h1>LangChain Translation</h1>
      </header>
      <main>
      <div className='chat'>
        <input
          type="text"
          placeholder="Enter a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={translateHandle}>Translate</button>
      </div>
        {translatedMessage && (
          <div>
            <p>Translated Message:</p>
            {translatedMessage && <p>{translatedMessage}</p>}
          </div>
        )}
      </main>
    </section>
  );
}

export default App;

