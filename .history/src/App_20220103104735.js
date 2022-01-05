import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import ArtGalleryPage from './pages/artGalleryPage/ArtGalleryPage';
import CollectionPage from './pages/collectionPage/CollectionPage';
import ArtViewPage from './pages/artViewPage/ArtViewPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <div className="main-container"> */}

        <Routes  >
          <Route path="/artGallery" exact element={<ArtGalleryPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path='/artView/:id' component={ArtViewPage} />
        </Routes>
        {/* </div> */}

      </Router>
    </div>
  );
}

export default App;
