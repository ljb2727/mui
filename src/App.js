import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'theme';
import Container from '@mui/material/Container';
import Navi from 'components/AppBar';

import DrivingList from 'pages/Driving/list';

import { Home, Driving, Demo } from 'pages';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Demo />
      <Router>
        <Navi />
        <Container sx={{ p: 1 }}>
          <Routes>
            <Route path="/home" exact element={<Home />} />
            <Route path="/driving" element={<Driving />} />
            <Route path="/driving_list/:name" element={<DrivingList />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
