import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Editor from './editor';
import Test from './editor/test/001/index.jsx';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: 16 }}>
      <p style={{ margin: 0 }}>Contador: <strong>{count}</strong></p>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        style={{ marginTop: 8, padding: '8px 12px', cursor: 'pointer' }}
      >
        +1
      </button>
    </div>
  );
}

function Home() {
  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, Arial, sans-serif' }}>
      <h1 style={{ margin: 0 }}>Mi proyecto React</h1>
      <p style={{ marginTop: 12, lineHeight: 1.5 }}>
        Esta es una página personalizada sencilla para el ejercicio académico.
      </p>

      <Counter />

      <nav style={{ marginTop: 16, display: 'flex', gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/editor">Editor</Link>
        <Link to="/test/001">Test</Link>
      </nav>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, Arial, sans-serif' }}>
      <h1 style={{ margin: 0 }}>About</h1>
      <p style={{ marginTop: 12, lineHeight: 1.5 }}>
        Página de ejemplo para practicar rutas con React Router.
      </p>
      <p style={{ marginTop: 12 }}>
        <Link to="/">Volver a Home</Link>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Rutas existentes del proyecto */}
        <Route path="/editor" element={<Editor />} />
        <Route path="/test/*" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

