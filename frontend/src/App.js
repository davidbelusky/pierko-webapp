import './App.css';
import Title from './components/Title'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Gallery from './components/Gallery/Gallery'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
