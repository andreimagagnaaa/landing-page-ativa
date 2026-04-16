import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { Button } from './Button';
import { cn } from './Button'; // Re-using cn, though should extract utils

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Diferencial', to: 'difference' },
    { name: 'SEG', to: 'seg' },
    { name: 'Soluções', to: 'solutions' },
    { name: 'Resultados', to: 'cases' },
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4 text-white"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer font-bold text-2xl flex items-center gap-2">
          <span className={cn("text-2xl font-bold", scrolled ? "text-primary" : "text-white")}>Ativa</span>
          <span className={cn("text-xs font-normal uppercase tracking-widest border-l pl-2", scrolled ? "text-gray-500 border-gray-300" : "text-gray-200 border-white/30")}>Consultoria</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to} 
              smooth={true} 
              duration={500} 
              offset={-80}
              className={cn(
                "cursor-pointer text-sm font-medium hover:text-opacity-80 transition-colors",
                scrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-white/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="final-cta" smooth={true} duration={500}>
             <Button variant={scrolled ? "primary" : "secondary"} size="sm">
              Diagnóstico Gratuito
             </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? "text-primary" : "text-white"} /> : <Menu className={scrolled ? "text-primary" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to} 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="text-gray-700 font-medium py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="final-cta" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            <Button className="w-full">
              Diagnóstico Gratuito
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;