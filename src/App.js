import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from './Components/Header';

import './Styles/App.css';

const FilmList = React.lazy(() => import('./Pages/FilmList'));
const FilmDetails = React.lazy(() => import('./Pages/FilmDetails'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Custom primary color (blue)
    },
    secondary: {
      main: '#dc004e', // Custom secondary color (red)
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<FilmList />} />
            <Route path="/films/:id" element={<FilmDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
