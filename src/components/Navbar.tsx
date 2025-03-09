
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
      scrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    )}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="font-serif text-2xl font-medium tracking-tight text-primary">
          Sarah
        </div>
        
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="menu-item text-foreground/80 hover:text-foreground px-1 py-1"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('education')}
              className="menu-item text-foreground/80 hover:text-foreground px-1 py-1"
            >
              Education
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('hobbies')}
              className="menu-item text-foreground/80 hover:text-foreground px-1 py-1"
            >
              Hobbies
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="menu-item text-foreground/80 hover:text-foreground px-1 py-1"
            >
              Gallery
            </button>
          </li>
        </ul>
        
        <button className="md:hidden text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
