import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import client from '../bff/client';
import { SnackbarProvider } from './contexts';
import './index.scss';
import { UploadOrder } from './pages';
import { Dashboard } from './pages/dashboard';

const App: React.FC = () => {
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <SnackbarProvider>
        <ApolloProvider client={client}>
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/upload-order" element={<UploadOrder />} />
            </Routes>
          </Router>
        </ApolloProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
