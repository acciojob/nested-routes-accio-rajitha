import React from 'react';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <div>
      <h4>Women Items:</h4>
      <ul>
        <li>
          <Link to="/women/grooming">Grooming</Link>
        </li>
        <li>
          <Link to="/women/shirt">Shirt</Link>
        </li>
        <li>
          <Link to="/women/trouser">Trouser</Link>
        </li>
        <li>
          <Link to="/women/jewellery">Jewellery</Link>
        </li>
      </ul>
    </div>
  );
}

export default Category;
