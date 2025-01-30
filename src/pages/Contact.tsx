import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Github, Linkedin, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    window.location.href = `mailto:cyusashyakapascal@gmail.com?subject=Portfolio Contact&body=${message}`;
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow contact-card-container">
        <div className={`contact-card ${isFlipped ? 'flipped' : ''}`}>
          {/* Front of the card */}
          <div className="contact-card-face contact-card-front">
            <div className="contact-avatar">
              <img 
                src="/lovable-uploads/d5aae0a1-2acb-4656-8995-dc6744eccbbe.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold">Pascal Cyusa</h2>
            <span className="contact-badge">DILUC</span>
            <div className="flex items-center gap-4 mt-4">
              <a 
                href="https://linkedin.com/in/pascal-cyusa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/pascalcyusa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
            <button 
              className="contact-button mt-8"
              onClick={() => setIsFlipped(true)}
            >
              CONTACT ME
            </button>
          </div>

          {/* Back of the card */}
          <div className="contact-card-face contact-card-back">
            <button 
              onClick={() => setIsFlipped(false)}
              className="back-button"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/d5aae0a1-2acb-4656-8995-dc6744eccbbe.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-bold">Pascal Cyusa</h2>
                  <span className="contact-badge text-xs">DILUC</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex-grow flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-50"
                />
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="flex-grow bg-gray-50"
                />
                <Button 
                  type="submit"
                  className="contact-button"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;