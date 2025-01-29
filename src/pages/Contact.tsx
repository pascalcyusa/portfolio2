import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-24">        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-12">
            With information or inquiries regarding opportunities that may 
            fit my interests and skill set, please contact me using the 
            information below.
          </p>

          <div className="mb-8">
            <p className="text-xl">
              Tel: <a href="tel:603-831-8045" className="text-purple-600 hover:text-purple-700">781-539-9412</a>
              {" | "}
              <a href="mailto:brianajones97@gmail.com" className="text-purple-600 hover:text-purple-700">
                cyusashyakapascal@gmail.com
              </a>
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://linkedin.com/in/pascal-cyusa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-600 hover:text-purple-700"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/pascalcyusa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-600 hover:text-purple-700"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;