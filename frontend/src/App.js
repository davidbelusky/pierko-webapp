import './App.css';
import Title from './components/Title'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Gallery from './components/Gallery/Gallery'
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
