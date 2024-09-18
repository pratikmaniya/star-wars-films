import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App';
import client from './apollo/apollo-client';
import ErrorBoundary from './ErrorBoundary'; 

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <CssBaseline />
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);