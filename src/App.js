import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Book from './pages/Book/Book';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:key" component={Book} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
