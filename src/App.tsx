import React, { Suspense } from 'react';
import AnimatedRoutes from './AnimatedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <AnimatedRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
