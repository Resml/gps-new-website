import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedSpindle, setSelectedSpindle] = useState(null);

  const handleNavigate = (page, spindle = null) => {
    setCurrentPage(page);
    if (spindle) {
      setSelectedSpindle(spindle);
    }
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'capabilities':
        return <Capabilities onNavigate={handleNavigate} />;
      case 'products':
        return <Products onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'contact':
        return (
          <Contact
            selectedSpindle={selectedSpindle}
            setSelectedSpindle={setSelectedSpindle}
          />
        );
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingTop: '80px' }}>
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <ChatWidget onNavigate={handleNavigate} />
    </div>
  );
}


export default App;
