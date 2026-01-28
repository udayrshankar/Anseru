// src/App.tsx
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load pages for better initial load performance
const Home = lazy(() => import('./pages/Home'));
const Features = lazy(() => import('./pages/Features'));
const Products = lazy(() => import('./pages/Products'));
const Pricing = lazy(() => import('./pages/Pricing'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const Investors = lazy(() => import('./pages/Investors'));

function App() {
  return (
    <div className="app-container">
      {/* Suspense wrapper for lazy loaded components */}
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/product" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/investors" element={<Investors />} />
          {/* Catch-all for 404 Not Found */}
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;