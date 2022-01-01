import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import HomePage from './pages/homePage/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-container">
          <Routes>
            <Route exact path="/" component={HomePage} />

          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
