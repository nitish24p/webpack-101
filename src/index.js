import React from 'react';
import { render } from 'react-dom';

import Heading from './components/Heading';
import Banner from './components/Banner';
import './styles/app.scss'

import img from './images/webpack.png'

const App = () => (
  <div>
    <Banner imageSource={img} bannerText='Lets Learn Webpack'/>
    <Heading>
      The environment is {process.env.ENVIRONMENT}
    </Heading>

    <div className='header-container'>
      <Heading>
        This is a heading.
      </Heading>
      <Heading>
        This is a another  heading.
      </Heading>
    </div>
  </div>
)


render(<App />, document.querySelector('.root'));