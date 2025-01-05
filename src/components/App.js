import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Category from './Category';
import Item from './Item';
import './../styles/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> 
            <Route path="women" element={<Category />} /> 
            <Route path="women/:item" element={<Item />} /> 
          </Route>
        </Routes>
      </div>
    </Router>
  );
};
export default App;
