import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Services', 'Gallery', 'Infrastructure', 'Blog', 'About'];

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    // Special handling for Gallery to navigate to the separate page
    if (sectionId === 'Gallery') {
      navigate('/gallery');
      return;
    }

    // Special handling for Blog to navigate to the separate blog list page
    if (sectionId === 'Blog') {
      navigate('/blog');
      return;
    }

    // Special handling for Home to navigate to top
    if (sectionId === 'Home') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // For other sections, use hash navigation
    const targetId = sectionId.toLowerCase();
    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-lg' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('Home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/500X1500.png"
              alt="Cricket Jersey Designs Logo"
              className="h-12 w-auto"
            />
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium transition-colors duration-300 relative group ${(location.pathname === '/gallery' && item === 'Gallery') ||
                  (location.pathname.startsWith('/blog') && item === 'Blog') ||
                  (location.pathname === '/' && item === 'Home' && !isScrolled)
                  ? 'text-[#BD22B8]'
                  : 'text-black hover:text-gray-600'
                  }`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#BD22B8] transition-all duration-300 ${(location.pathname === '/gallery' && item === 'Gallery')
                  ? 'w-full'
                  : 'w-0 group-hover:w-full'
                  }`}></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-all"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
      >
        <div className="px-4 py-4 bg-white border-t border-gray-100 shadow-xl space-y-2">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left px-4 py-3 text-black hover:text-[#BD22B8] hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
