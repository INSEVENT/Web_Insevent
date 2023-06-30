import './App.css';
import Navi from './component/Navi.js';
import Carou from './section/Carou';
import About from './section/About';
import Blog from './section/Blog';
import Foot from './component/Foot';
import FaQ from './section/FaQ';
import React, { useEffect, useState, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Talkshow from './section/Talkshow';
import Sponsor from './section/Sponsor';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    if (isLoaded && targetRef.current) {
      const delay = 1000;
      setTimeout(() => {
        scroll.scrollTo(targetRef.current.offsetTop, {
          duration: 1000,
          smooth: 'easeInOutQuart', 
        });
      }, delay);
    }
  }, [isLoaded]);

  return (
    <div className="App">
      <Navi/>
      <Link
        to="Comp"
        smooth={true}
        duration={500}
        delay={0}
        offset={-50} // Jarak offset dari elemen target (dalam piksel)
        spy={true}
        exact="true"
        className="scroll-link">
      </Link>
      <div className="sec1">
        <div id='Home'></div>
        <Carou/>
      </div>
      <div className='sec2'>
        <div id='About'></div>
        <About/>
      </div>
      <div className='sec3' ref={targetRef}>
        <div id='Comp'></div>
        <Blog/>
      </div>
      <div className='sec4'>
        <Sponsor/>
      </div>
      <div className='sec2'>
        <div id='Talkshow'></div>
        <Talkshow/>
      </div>
      <div className='sec2'>
        <div id='FaQ'></div>
        <FaQ/>
      </div>
      <Foot/>
    </div>
  );
}

export default App;
