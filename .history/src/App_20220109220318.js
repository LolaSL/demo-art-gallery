import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import ArtGalleryPage from './pages/artGalleryPage/ArtGalleryPage';
import CollectionPage from './pages/collectionPage/CollectionPage';
import ArtViewPage from './pages/artViewPage/ArtViewPage';
import { EventsPage } from './pages/eventPage/EventsPage';
import { BookingPage } from './pages/bookingPage/BookingPage';
import { AboutPage } from './pages/aboutPage/AboutPage';
import AlertWithButton from './components/alert/AlertWithButton';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">

          <Routes > <AlertWithButton />
            <Route path="/" exact element={<ArtGalleryPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path='/artView/:id' element={<ArtViewPage />} />
            <Route path='/events' element={<EventsPage />} />
            <Route path='/booking' element={<BookingPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
