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
            <Route index element={<Home />} /> {/* Landing page */}
            <Route path="women" element={<Category />} /> {/* Women Category Page */}
            <Route path="women/:item" element={<Item />} /> {/* Item Page */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

/*
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
       
    </div>
  )
}

export default App
*/