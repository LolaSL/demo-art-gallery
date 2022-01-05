import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import ArtGalleryPage from './pages/artGalleryPage/ArtGalleryPage';
import CollectionPage from './pages/collectionPage/CollectionPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <div className="main-container"> */}

        <Switch  >
          <Route path="/artGallery" exact element={<ArtGalleryPage />} />
          <Route path="/collection/" element={<CollectionPage />} />
        </Switch>
        {/* </div> */}

      </Router>
    </div>
  );
}

export default App;
