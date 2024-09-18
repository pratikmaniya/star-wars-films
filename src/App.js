import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';

import './Styles/App.css';

const FilmList = React.lazy(() => import('./Pages/FilmList'));
const FilmDetails = React.lazy(() => import('./Pages/FilmDetails'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<FilmList />} />
          <Route path="/films/:id" element={<FilmDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
