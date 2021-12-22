import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Navi from './components/AppBar';
import AlertDialogSlide from './Demo';
import Driving from './components/Driving';

const Home = () => {
  return <div>home</div>;
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navi />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/driving" element={<Driving />} />
        </Routes>
      </Router>
      <AlertDialogSlide />
    </ThemeProvider>
  );
};

export default App;
