import { ExternalLink, Shield, FileText, Building, ArrowUp, Mail } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const footerLinks = [
    {
      title: "お問い合わせ",
      links: [
        { name: "LINE公式アカウント", href: "https://lin.ee/YL3zCoD", external: true },
        { name: "メール", href: "mailto:info.dots.personal@gmail.com", external: true, icon: Mail }
      ]
    },
    {
      title: "法的情報",
      links: [
        { name: "プライバシーポリシー", href: "/privacy-policy", icon: Shield },
        { name: "利用規約", href: "/terms-of-service", icon: FileText },
        { name: "特定商取引法に基づく表記", href: "/commercial-transaction", icon: FileText }
      ]
    },
    {
      title: "会社情報",
      links: [
        { name: "会社概要", href: "/company-info", icon: Building },
        { name: "コーチ求人", href: "/coach-recruitment", icon: FileText }
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const targetId = id.replace('#', '');
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageNavigation = (href: string) => {
    navigate(href);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Scroll to top when location changes (for any route navigation)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={linkIndex}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-colors duration-300 inline-flex items-center"
                        >
                          {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                          {link.name}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      ) : link.scroll ? (
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-300 hover:text-white transition-colors duration-300 text-left inline-flex items-center"
                        >
                          {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                          {link.name}
                        </button>
                      ) : (
                        <button
                          onClick={() => handlePageNavigation(link.href)}
                          className="text-gray-300 hover:text-white transition-colors duration-300 text-left inline-flex items-center"
                        >
                          {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                          {link.name}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl font-semibold text-white mr-2">DOTS</span>
              <span className="text-gray-300">サッカーパーソナル</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
              Dream・Opportunity・Training・Success<br />
              選手一人ひとりの可能性を最大限に引き出す<br />
              次世代のサッカー育成プログラム
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={scrollToTop}
            className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300 inline-flex items-center justify-center"
            aria-label="ページ上部に戻る"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 DOTSサッカーパーソナル. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}