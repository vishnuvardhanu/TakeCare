import React from 'react';

const QueryInput = ({ query, setQuery }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="query">
        Health Query
      </label>
      <textarea
        id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Describe your health issue"
        rows="4"
      />
    </div>
  );
};

export default QueryInput;
