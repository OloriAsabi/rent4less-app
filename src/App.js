import React from 'react';
import Nav from './components/Navbar/Nav';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login} from './components/Navbar/Login';
import Register from './components/Navbar/Register';
import Home from './components/Home/Home';


function App() {
  return (
  <Router>
      <Nav />
      <Routes>
      <Route path='/'  element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  );
}
export default App;
