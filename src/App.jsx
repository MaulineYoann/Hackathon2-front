import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WebTv from './pages/WebTv';
import News from './pages/News';
import Staff from './pages/Staff';
import Project from './pages/Project';
import Contact from './pages/Contact';
import TeamList from './pages/Team/TeamList';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
      < Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/web-tv" component={WebTv} />
          <Route path="/team" component={TeamList} />
          <Route path="/news" component={News} />
          <Route path="/staff" component={Staff} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
        </Switch>
        < Footer />
      </Router>
    </div>
  );
}

export default App;
