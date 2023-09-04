import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Footer from './components/Footer';

function App() {
  // Determine which component to render based on window.location.pathname
  let Component;
  switch (window.location.pathname) {
    case '/':
      Component = Home;
      break;
    case '/pricing':
      Component = Pricing;
      break;
    case '/about':
      Component = About;
      break;
    
  }

  return (
    <div>
      <Navbar />
      <Component />
      <Footer/>
    </div>
  );
}

export default App;
