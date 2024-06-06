import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageList from './components/ImageList';
import ImageDetail from './components/ImageDetail';
import './index.css'; // Import global CSS
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImageList />} />
        <Route path="/:id/item" element={<ImageDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
