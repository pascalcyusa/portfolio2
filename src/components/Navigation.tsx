import { Home, Briefcase, User, FileText, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold">
            Pascal's Portfolio
          </Link>

          <div className="flex space-x-8">
            <Link
              to="/"
              className={`text-gray-600 hover:text-gray-900 ${isActive('/') ? 'font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`text-gray-600 hover:text-gray-900 ${isActive('/projects') ? 'font-semibold' : ''}`}
            >
              Projects
            </Link>
            <Link
              to="/research"
              className={`text-gray-600 hover:text-gray-900 ${isActive('/research') ? 'font-semibold' : ''}`}
            >
              Research
            </Link>
            <Link
              to="/resume"
              className={`text-gray-600 hover:text-gray-900 ${isActive('/resume') ? 'font-semibold' : ''}`}
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className={`text-gray-600 hover:text-gray-900 ${isActive('/contact') ? 'font-semibold' : ''}`}
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