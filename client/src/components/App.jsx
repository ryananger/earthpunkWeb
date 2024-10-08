import React, {useEffect, useState} from 'react';

import '../styles/style.css';

import Earthpunk from './Earthpunk.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

const App = function() {
  return (
    <div id='app' className='app v'>
      <div id='box'/>
      <div className='main h'>
        <div className='leftBar v'>
          <Earthpunk/>
          <Contact/>
        </div>
        <div className='v'>
          <About/>
          <Projects/>
        </div>
      </div>
    </div>
  );
};

export default App;

