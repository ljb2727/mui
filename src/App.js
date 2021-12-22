import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
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
    <>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/onebooking" element={<Onebooking />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
