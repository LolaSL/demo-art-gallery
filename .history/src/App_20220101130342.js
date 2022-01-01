import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { HomePage } from './pages/homePage/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>

        </div>

      </Router>
    </div>
  );
}

export default App;
