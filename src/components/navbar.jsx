import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-primary-dark text-white fixed top-0 left-0 z-50 shadow-xl">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/assets/logo.png" alt="Coach Lilian Logo" className="h-14 scale-160 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-base font-medium">
          <li><Link to="/" className="hover:text-primary-accent duration-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-primary-accent duration-300">About</Link></li>
          <li><Link to="/programs" className="hover:text-primary-accent duration-300">Programs</Link></li>
          <li><Link to="/insightspage" className="hover:text-primary-accent duration-300">Insights</Link></li>
          <li><Link to="/testimonies" className="hover:text-primary-accent duration-300">Testimonies</Link></li>
          <li><Link to="/contact" className="hover:text-primary-accent duration-300">Contact</Link></li>
        </ul>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/join-class"
            className="bg-primary-accent px-5 py-2 rounded-xl font-semibold text-white hover:opacity-90 duration-300"
          >
            Join Class
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-primary-dark w-full py-6 px-6 space-y-6 shadow-lg">
          <ul className="flex flex-col space-y-6 text-lg font-medium">
            <li><Link to="/" onClick={() => setOpen(false)} className="hover:text-primary-accent">Home</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)} className="hover:text-primary-accent">About</Link></li>
            <li><Link to="/programs" onClick={() => setOpen(false)} className="hover:text-primary-accent">Programs</Link></li>
            <li><Link to="/testimonies" onClick={() => setOpen(false)} className="hover:text-primary-accent">Testimonies</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)} className="hover:text-primary-accent">Contact</Link></li>
          </ul>

          <Link
            to="/join-class"
            onClick={() => setOpen(false)}
            className="block bg-primary-accent text-white text-center py-3 rounded-xl font-semibold"
          >
            Join Class
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar
