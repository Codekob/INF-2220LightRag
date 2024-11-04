import React, { useState } from 'react';

type QueryInputProps = {
    onSubmit: (query: string, file: File | null, mode: string) => void;
};

const QueryInput: React.FC<QueryInputProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState('hybrid'); // Default mode

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(query, file, mode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query here..."
          rows={4}
        />
      </div>
      <div>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        />
      </div>
      <div>
        <select 
          value={mode} 
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="naive">Naive</option>
          <option value="local">Local</option>
          <option value="global">Global</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QueryInput; 