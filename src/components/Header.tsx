import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoIcon from 'figma:asset/0c8ceb6676ddd473bdde7927040c5355917237e9.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'DOTSとは', id: 'about', type: 'scroll' },
    { name: 'メソッド', id: 'method', type: 'scroll' },
    { name: '料金プラン', id: 'pricing', type: 'scroll' },
    { name: 'コーチスタッフ紹介', id: 'coaches', type: 'scroll' },
    { name: 'よくある質問', id: 'faq', type: 'scroll' },
    { name: 'コーチ求人', id: 'coach-recruitment', type: 'route', path: '/coach-recruitment' },
    { name: 'スポンサー提携先', id: 'sponsors', type: 'route', path: '/sponsor' },
    { name: 'お問い合わせ', id: 'contact', type: 'scroll' }
  ];

  const handleMenuClick = (item: any) => {
    if (item.type === 'route') {
      // Route navigation
      navigate(item.path);
      setIsMenuOpen(false);
    } else {
      // Scroll navigation
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          scrollToSection(item.id);
        }, 100);
      } else {
        scrollToSection(item.id);
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-10 h-10 relative bg-white rounded-lg overflow-hidden">
              <img 
                src={logoIcon} 
                alt="DOTS Logo" 
                className="w-full h-full object-contain drop-shadow-lg"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                  background: 'transparent'
                }}
              />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 bg-clip-text text-transparent">
              DOTS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <button 
                key={index}
                onClick={() => handleMenuClick(item)}
                className="relative text-sm font-medium text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-green-500 hover:bg-clip-text transition-all duration-300 ease-in-out py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:via-cyan-50 hover:to-green-50 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out rounded-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200/50 bg-white/95 backdrop-blur-xl">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <button 
                  key={index}
                  onClick={() => handleMenuClick(item)}
                  className="text-left text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-green-500 hover:bg-clip-text font-medium py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:via-cyan-50 hover:to-green-50 transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}