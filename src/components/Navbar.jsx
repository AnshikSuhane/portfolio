import { useState, useEffect } from "react";
import resume from "../assets/resume.pdf";
import { FileText } from "lucide-react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed w-full bg-blue-500 shadow-md z-50 font-bold text-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <p className="text-xl font-bold text-gray-800">PortFolio</p>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#Home" className="text-white hover:text-gray-900">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-900">
              About Us
            </a>
          </li>
          <li>
            <a href="#Skills" className="text-white hover:text-gray-900">
              Skills
            </a>
          </li>
          <li>
            <a href="#Projects" className="text-white hover:text-gray-900">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-900">
              Contact
            </a>
          </li>
          <li>
            <a
              href={resume}
              download="resume"
              className="text-gray-600 hover:text-gray-900"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <div className="space-y-2 cursor-pointer">
            <div className="w-8 h-1 bg-gray-800"></div>
            <div className="w-8 h-1 bg-gray-800"></div>
            <div className="w-8 h-1 bg-gray-800"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <ul className="space-y-4 text-center">
            <li>
              <a
                href="#Home"
                className="block text-gray-600 hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-gray-600 hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                className="block text-gray-600 hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className="block text-gray-600 hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <a
            href="public/AnshikSuhane (4)_compressed.pdf"
            download="Anshik_Suhane_Resume.pdf"
            onClick={() => {
              setMenuOpen(false);
            }}
            className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
          >
            <span className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </span>
          </a>
            
          </ul>
        </div>
      )}

      {/* Scroll-to-Top Button */}
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Navbar;
