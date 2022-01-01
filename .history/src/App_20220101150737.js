import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import ArtGalleryPage from './pages/artGalleryPage/ArtGalleryPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <div className="main-container"> */}
        <Switch>
          <Route exact path="/" component={ArtGalleryPage} />

        </Switch>
        {/* </div> */}

      </Router>
    </div>
  );
}

export default App;
