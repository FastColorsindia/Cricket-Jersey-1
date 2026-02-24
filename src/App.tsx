import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppIcon from './components/WhatsAppIcon';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import BlogListPage from './pages/BlogListPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <Home />
            <Footer />
            <WhatsAppIcon />
          </>
        } />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
