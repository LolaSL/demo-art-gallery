import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import ArtGalleryPage from './pages/artGalleryPage/ArtGalleryPage';
import CollectionPage from './pages/collectionPage/CollectionPage';
import ArtViewPage from './pages/artViewPage/ArtViewPage';
import { EventsPage } from './pages/eventPage/EventsPage';
import { BookingPage } from './pages/bookingPage/BookingPage';
import { AboutPage } from './pages/aboutPage/AboutPage';
import Alert from './components/alert/Alert';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Alert />
          <Routes >
            <Route path="/" exact element={<ArtGalleryPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path='/artView/:id' element={<ArtViewPage />} />
            <Route path='/events' element={<EventsPage />} />
            <Route path='/booking' element={<BookingPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
const NoMatch = () => {
  return (<p>There's nothing here: 404!</p>);
};
export default App;
