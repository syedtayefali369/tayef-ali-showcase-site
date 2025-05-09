
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 glass z-50">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-bold gradient-text">
            Tayef Ali
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors hover-card px-2 py-1 rounded"
              >
                {item.label}
              </a>
            ))}
            <Button className="glass hover-card">Resume</Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden glass p-2 rounded" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-2 space-y-3 glass mt-2 rounded">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-foreground/80 hover:text-foreground transition-colors hover:bg-white/5 px-4 rounded"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
            <Button className="glass hover-card w-full mt-4">Resume</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
