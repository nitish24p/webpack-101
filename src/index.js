import React from 'react';
import { render } from 'react-dom';

import Heading from './Heading';

const App = () => (
  <div>
    <Heading>
      This is a heading.
    </Heading>
  </div>
)

render(<App />, document.querySelector('.root'));