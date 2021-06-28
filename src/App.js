import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import LandingPage from './components/pages/landing-page/LandingPage';
import Projects from './components/pages/projects/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
