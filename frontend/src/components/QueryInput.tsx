import React, { useState } from 'react';

interface QueryInputProps {
  onSubmit: (query: string, file: File | null) => void;
}

const QueryInput: React.FC<QueryInputProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(query, file);
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default QueryInput; 