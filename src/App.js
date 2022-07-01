import { useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import FeaturedProjects from './pages/FeaturedProjects';
import HomePage from './pages/HomePage';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <HomePage />

      <AboutPage />

      <FeaturedProjects />

      <BlogPage />

      <ContactPage />
    </>
  );
}

export default App;
