
import React from 'react';
import SliderContext from './context'
//import './Item.scss'
import { Link } from 'react-router-dom';

const Item = ({ world }) => (
  <SliderContext.Consumer>
    {({ elementRef }) => {

      return (
        <div
          ref={elementRef}
          className='item'
        >
          <Link to={`/worlds/${world.id}`}><h3>{`${world.name}`}</h3></Link>
                            <p>{`${world.description}`}</p>
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;