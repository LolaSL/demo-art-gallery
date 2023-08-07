import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ArtGalleryPage from './pages/artGalleryPage/ArtGalleryPage';
import CollectionPage from './pages/collectionPage/CollectionPage';
import ArtViewPage from './pages/artViewPage/ArtViewPage';
import EventsPage from './pages/eventPage/EventsPage';
import BookingPage from './pages/bookingPage/BookingPage';
import { AboutPage } from './pages/aboutPage/AboutPage';
import Alert from './components/alert/Alert';
import { useTranslation, withTranslation } from 'react-i18next';

import './App.scss';

function App() {

  const NoMatch = () => {
    return (<p className="text-center text-danger fs-2 text-uppercase">{t("pages.error.p")}</p>);
  };

  const [t] = useTranslation();
  return (
    <div className="App">
      <Router> 
        <Navbar />
       
        <Alert />
        <div className="container">
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

export default withTranslation()(App);
