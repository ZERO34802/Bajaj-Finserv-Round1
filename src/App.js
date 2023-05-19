import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import './App.css';

function App() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="container">
      {jsonData ? (
        <DataTable data={jsonData} />
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default App;
