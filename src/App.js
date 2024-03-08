import Navbar from './components/Navbar';
import Home from './Home'
import Create from './components/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
