import './App.css';
import Navi from './component/Navi.js';
import Carou from './section/Carou';

function App() {
  return (
    <div className="App">
      <Navi/>
      <header className="App-header">
        <Carou/>
      </header>
    </div>
  );
}

export default App;
