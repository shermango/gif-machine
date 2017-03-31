import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => {
  const gifs = props.gifs;
  // console.log('HEre are teh gifs ', gifs);

  let display;

  // if no results found, set display to NoGifs component, else map over and display each GIF :) 
  if (gifs.length > 0) {
    display = gifs.map(gif => {
      return <Gif gif={gif.images.fixed_height.url} key={gif.id} alt={gif.slug} />
    });
  } else {
    display = <NoGifs />;
  }

  return(
    <ul className="gif-container">
      { display }
    </ul>
  )
};

export default GifList;