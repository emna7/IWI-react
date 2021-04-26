import './App.css';
import { Route, Link } from 'react-router-dom';
import Club from './Club';
import Sign from './Sign';
import Event from './Event';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <Route exact path ="/Club" Component={Club}/>
      <Route exact path ="/Event" Component={Event}/>
      <div className="App-header">
        <h1>
          IWI
        </h1>
      </div>
      <div className="App-footer">
      </div>
    </div>
  );
}

export default App;
