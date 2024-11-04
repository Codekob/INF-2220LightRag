import React, { useState } from 'react';
import QueryInput from './components/QueryInput';
import './App.css';

function App() {
  const [answer, setAnswer] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (query: string, file: File | null) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('query', query);
      if (file) {
        formData.append('file', file);
      }

      const response = await fetch('http://localhost:8000/api/query', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error('Error:', error);
      setAnswer('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>AI Query System</h1>
      <QueryInput onSubmit={handleSubmit} />
      {loading && <div>Loading...</div>}
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
