import React from 'react';

const Gif = props => (
  <li className="gif-item">
    <img src={props.gif} alt={props.alt} />
  </li>
);

export default Gif;