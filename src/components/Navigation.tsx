import { Home, Briefcase, User, FileText, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold">
            Pascal's Portfolio
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:space-x-8">
            <Link
              to="/"
              className={`text-gray-600 hover:text-gray-900 ${
                isActive("/") ? "font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`text-gray-600 hover:text-gray-900 ${
                isActive("/projects") ? "font-semibold" : ""
              }`}
            >
              Projects
            </Link>
            <Link
              to="/research"
              className={`text-gray-600 hover:text-gray-900 ${
                isActive("/research") ? "font-semibold" : ""
              }`}
            >
              Research
            </Link>
            <Link
              to="/resume"
              className={`text-gray-600 hover:text-gray-900 ${
                isActive("/resume") ? "font-semibold" : ""
              }`}
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className={`text-gray-600 hover:text-gray-900 ${
                isActive("/contact") ? "font-semibold" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/projects")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/research"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/research")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Research
            </Link>
            <Link
              to="/resume"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/resume")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/contact")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;