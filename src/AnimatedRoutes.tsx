import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Main from './pages/Main';

const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route caseSensitive path="/" element={<Main />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
