import React, { useState } from 'react';
import QueryInput from './components/QueryInput';
import './App.css';

function App() {
  const [answer, setAnswer] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (query: string, mode: string) => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8020/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query,
          mode: mode
        }),
      });

      const data = await response.json();
      setAnswer(data.data);
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
      setAnswer('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="title">Legal Vantage</h1>
      <h2 className="subtitle">What legal knowledge do you seek?</h2>
      <QueryInput onSubmit={handleSubmit} isLoading={loading} />
      {answer && (
        <div className="answer-container">
          <h2>Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
