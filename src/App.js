import './App.css';
import Navi from './component/Navi.js';
import Carou from './section/Carou';
import About from './section/About';

function App() {
  return (
    <div className="App">
      <Navi/>
      <div className="sec1">
        <Carou/>
      </div>
      <div className='sec2'>
        <About/>
      </div>
    </div>
  );
}

export default App;
