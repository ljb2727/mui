import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import AppBar from './components/AppBar';
import Demo from './Demo';
const Home = () => {
  return <div>home</div>;
};
const Booking = () => {
  return <div>Booking</div>;
};
const Onebooking = () => {
  return <div>onebooking</div>;
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/onebooking" element={<Onebooking />} />
        </Routes>
      </Router>
      <Demo></Demo>
    </ThemeProvider>
  );
};

export default App;
