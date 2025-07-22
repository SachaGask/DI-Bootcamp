import React, { useEffect, useState } from 'react';

function App() {
  const [helloMsg, setHelloMsg] = useState('');
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  // Partie I : GET
  useEffect(() => {
    async function fetchHello() {
      const res = await fetch('http://localhost:5000/api/hello');
      const data = await res.json();
      setHelloMsg(data.message);
    }
    fetchHello();
  }, []);

  // Partie II : POST
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/world', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post: input })
    });
    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>{helloMsg}</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: 32 }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type something..."
          style={{ width: '100%', padding: '0.5rem', marginBottom: 8 }}
        />
        <button type="submit" style={{ width: '100%' }}>Send to server</button>
      </form>
      {response && <div style={{ marginTop: 16, color: 'green' }}>{response}</div>}
    </div>
  );
}

export default App;
