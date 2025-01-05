import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Item() {
  const { item } = useParams(); 

  return (
    <div>
     
      <h4>Women Items:</h4>
      <ul>
        {['Grooming', 'Shirt', 'Trouser', 'Jewellery'].map((i) => (
          <li key={i}>
            <Link to={`/women/${i.toLowerCase()}`}>{i}</Link>
          </li>
        ))}
      </ul>
      {item && (
        <div>
          
          <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
        </div>
      )}
    </div>
  );
}

export default Item;
