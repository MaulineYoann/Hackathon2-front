import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebTv from './pages/WebTv';
import Team from './pages/Team';
import News from './pages/News';
import Staff from './pages/Staff';
import Project from './pages/Project';
import Contact from './pages/Contact';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>    
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/" component={WebTv}/>
        <Route exact path="/" component={Team}/>
        <Route exact path="/" component={News}/>
        <Route exact path="/" component={Staff}/>
        <Route exact path="/" component={Project}/>
        <Route exact path="/" component={Contact}/>
      </Switch>
      </Router> 
    </div>
  );
}

export default App;
