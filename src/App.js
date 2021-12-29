import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'theme';
import Container from '@mui/material/Container';
import Navi from 'components/AppBar';

import { Home, Driving, DrivingList, Demo } from 'pages';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navi />
        <Container sx={{ p: 1 }}>
          <Routes>
            <Route path="/" exact element={<Home />} />,
            <Route path="/driving" element={<Driving />} />
            <Route path="/driving/list/:name" element={<DrivingList />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
