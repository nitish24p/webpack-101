import React from 'react';
import './../styles/banner.scss';

import Heading from './Heading.js';

const Banner = (props) => {
  return (
    <div className='banner'>
      <img src={props.imageSource}/>
      <Heading>{props.bannerText}</Heading>
    </div>
  )
};

export default Banner;