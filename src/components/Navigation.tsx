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
            Portfolio
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 ${isActive('/') ? 'text-purple-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/projects" 
              className={`flex items-center space-x-2 ${isActive('/projects') ? 'text-purple-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Projects</span>
            </Link>
            <Link 
              to="/about" 
              className={`flex items-center space-x-2 ${isActive('/about') ? 'text-purple-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <User className="w-4 h-4" />
              <span>About Me</span>
            </Link>
            <Link 
              to="/resume" 
              className={`flex items-center space-x-2 ${isActive('/resume') ? 'text-purple-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </Link>
            <Link 
              to="/contact" 
              className={`flex items-center space-x-2 ${isActive('/contact') ? 'text-purple-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;