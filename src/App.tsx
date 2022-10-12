import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Navigate state={{ from: location.pathname }} to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
