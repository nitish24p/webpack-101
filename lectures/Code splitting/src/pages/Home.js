import React from 'react'

import Banner from './../components/Banner';
import Heading from './../components/Heading';
import img from './../images/webpack.png'

const Home = () => (
  <div>
    <Banner imageSource={img} bannerText='Lets Learn Webpack' />
    <Heading>This is the Home Page</Heading>
  </div>
);

export default Home;