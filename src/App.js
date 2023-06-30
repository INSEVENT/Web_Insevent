import './App.css';
import Navi from './component/Navi.js';
import Carou from './section/Carou';
import About from './section/About';
import Blog from './section/Blog';
import Foot from './component/Foot';
import FaQ from './section/FaQ';

function App() {
  return (
    <div className="App">
      <Navi/>
      <div className="sec1">
        <div id='Home'></div>
        <Carou/>
      </div>
      <div>
      <div className='sec2'>
        <div id='About'></div>
        <About/>
      </div>
      </div>
      <div className='sec1'>
        <div id='Comp'></div>
        <Blog/>
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
