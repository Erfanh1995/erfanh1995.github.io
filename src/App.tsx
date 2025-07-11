import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme, ThemeContext, type ThemeMode } from './theme.ts';
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
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('themeMode');
    return (saved as ThemeMode) || 'system';
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (themeMode === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return themeMode === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
    
    if (themeMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(mediaQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      setIsDarkMode(themeMode === 'dark');
    }
  }, [themeMode]);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, isDarkMode }}>
      <ThemeProvider theme={currentTheme}>
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
    </ThemeContext.Provider>
  );
}

export default App; 