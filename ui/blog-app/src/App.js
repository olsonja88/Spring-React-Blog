// import Posts from './components/Posts';
// import Navbar from './components/BlogNav';

import logo from './logo.svg';
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/custom.css";
import Home from './components/Home';
import BlogNav from './components/BlogNav';
import CategoryList from './components/CategoryList';
import CategoryEdit from './components/CategoryEdit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/categories' exact={true} element={<CategoryList/>}/>
        <Route path='/categories/:id' element={<CategoryEdit/>}/>
      </Routes>
    </Router>
  )
}

export default App;
