import React, { useState } from 'react';

type QueryInputProps = {
    onSubmit: (query: string, mode: string) => void;
    isLoading: boolean;
};

const modeDescriptions = {
  naive: "Direct question-answering without context. Best for simple, factual queries.",
  local: "Uses local document context for answers. Ideal for specific document-based questions.",
  global: "Searches across all available documents. Best for broad legal knowledge queries.",
  hybrid: "Combines local and global context. Provides most comprehensive answers with balanced context."
};

const QueryInput: React.FC<QueryInputProps> = ({ onSubmit, isLoading }) => {
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState('hybrid');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(query, mode);
  };

  // Check if query is empty or only contains whitespace
  const isQueryEmpty = !query.trim();

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="How do I evade taxes in Germany as much as possible? Given that..."
          rows={4}
        />
        <div className="controls">
          <select 
            value={mode} 
            onChange={(e) => setMode(e.target.value)}
          >
            {Object.entries(modeDescriptions).map(([value, description]) => (
              <option key={value} value={value}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </option>
            ))}
          </select>
          <div className="tooltip-container">
            <span className="help-icon" data-tooltip={modeDescriptions[mode as keyof typeof modeDescriptions]}>?</span>
          </div>
          <button type="submit" disabled={isLoading || isQueryEmpty}>
            {isLoading ? "..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default QueryInput; 