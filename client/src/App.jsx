import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [event, setEvent] = useState('');
  const [timestamp, setTimestamp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/timestamp', { event });
      setTimestamp(response.data.timestamp);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Notary Platform</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder="Enter event details"
          required
        />
        <button type="submit">Timestamp</button>
      </form>
      {timestamp && (
        <div>
          <h2>Timestamped Event:</h2>
          <p>{event}</p>
          <p>Timestamp: {timestamp}</p>
        </div>
      )}
    </div>
  );
}

export default App;