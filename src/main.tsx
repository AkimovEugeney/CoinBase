import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Providers/ThemeProvider.tsx';
import { Main } from './layout/Main/Main.tsx';
import './index.scss';
import { Header } from './layout/Header/Header.tsx';
import { Dashboard } from './layout/Dashboard/Dashboard.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Dashboard />
        <Main />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
