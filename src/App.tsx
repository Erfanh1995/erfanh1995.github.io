import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme.ts';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Education from './pages/Education.tsx';
import Research from './pages/Research.tsx';
import Professional from './pages/Professional.tsx';
import Publications from './pages/Publications.tsx';
import Teaching from './pages/Teaching.tsx';
import NonProfit from './pages/NonProfit.tsx';
import Artworks from './pages/Artworks.tsx';
import About from './pages/About.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/research" element={<Research />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/non-profit" element={<NonProfit />} />
            <Route path="/artworks" element={<Artworks />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 