import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold">
            Portfolio
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              ILLUSTRATION
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              GRAPHIC DESIGN
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              ABOUT
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              CONTACT
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;