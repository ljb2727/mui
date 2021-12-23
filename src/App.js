import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'theme';
import Container from '@mui/material/Container';
import Navi from 'components/AppBar';
import AlertDialogSlide from 'Demo';
import Driving from 'components/Driving';
import DrivingList from 'components/Driving/list';

const Home = () => {
  return <div>home</div>;
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navi />
        <Container sx={{ p: 1 }}>
          <Routes>
            <Route path="/home" exact element={<Home />} />
            <Route path="/driving" element={<Driving />} />
            <Route path="/driving_list" element={<DrivingList />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
