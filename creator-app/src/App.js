import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('/api/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          <h2>Category List</h2>
          {categories.map(category =>
            <div key={category.id}>
              {category.name}
            </div>
            )}
        </div>
      </header>
    </div>
  );
}

export default App;
