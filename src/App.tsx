// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';

function App() {
  return (
    <div className="app-container">
      {/* Navbar typically goes here so it stays on every page */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        {/* Catch-all for 404 Not Found */}
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;