import React, { useState, useEffect } from 'react';

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  // Fetch vehicle list on component mount
  useEffect(() => {
    fetch('http://localhost:8080/api/vehicles')
      .then(res => res.json())
      .then(data => setVehicles(data))
      .catch(() => setError('Failed to fetch vehicles.'));
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Vehicle name cannot be empty.');
      return;
    }
    fetch('http://localhost:8080/api/vehicles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
      .then(res => res.json())
      .then(data => {
        setVehicles(data);
        setName('');
        setError('');
      })
      .catch(() => setError('Failed to add vehicle.'));
  };

  return (
    <div>
      <h2>Vehicle Inventory</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Vehicle Name"
          required
        />
        <button type="submit" disabled={!name.trim()}>Add Vehicle</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {vehicles.map((v, idx) => (
          <li key={idx}>{v.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

