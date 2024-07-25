import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Popups from './components/Popups';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [popupDetails, setPopupDetails] = useState('');
  const [isSourceOpen, setIsSourceOpen] = useState(false);

  const handleOpenPopup = (content, detail) => {
    setPopupContent(content);
    setPopupDetails(detail);
    setIsPopupOpen(true);
    setIsSourceOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects onOpenPopup={handleOpenPopup} />
      <Contact />
      <Footer />
      <Popups trigger={isPopupOpen} onClose={handleClosePopup}>
        <h2>{popupContent}</h2>
        <p>{popupDetails}</p>
        <p>{isSourceOpen}</p>
      </Popups>
    </div>
  );
}

export default App;
