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
        <Route path="/web-tv" component={WebTv}/>
        <Route path="/team" component={Team}/>
        <Route path="/news" component={News}/>
        <Route path="/staff" component={Staff}/>
        <Route path="/project" component={Project}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      </Router> 
    </div>
  );
}

export default App;
