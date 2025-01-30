import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const Research = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-24">
        
        <div className="mb-16">
        </div>
                {/* Microscale Sensors Lab Section */}
                <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ultrasonic Anemometer Development</h2>
              <p className="text-gray-700 mb-4">
                Played a key role in the development of a miniature ultrasonic anemometer using the TDK CH101 sensor 
                for potential applications in Navy high-altitude UAVs. Achieved significant breakthroughs in measurement 
                accuracy and system optimization.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                <h3 className="font-semibold mb-2 text-sm">Key Achievements</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Distance measurements within ± 0.1878 mm error margin</li>
                  <li>• Wind velocity measurements at ± 0.6454 m/s accuracy</li>
                  <li>• Developed ToF-airflow relationship analysis</li>
                  <li>• Working towards ±0.05 m/s wind velocity accuracy</li>
                </ul>
              </div>
              <div className="text-gray-600">
                <p className="mb-2">Microscale Sensors and Systems Lab</p>
                <p className="mb-4">Jun 2024 - Present</p>
                <a 
                  href="https://github.com/yourusername/ultrasonic-anemometer" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                  style={{ color: '#a5c8cf', transition: 'color 0.2s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#e3cdb8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#a5c8cf'}
                >
                  View Research <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
            <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Ultrasonic Sensor Research"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* CEEO Section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                alt="STEM Education Outreach"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">STEM Education Innovation</h2>
              <p className="text-gray-700 mb-4">
                Developed comprehensive STEM curricula for K-12 students, focusing on practical engineering 
                applications using LEGO and Arduino projects. Led the implementation of maker spaces across 
                Rwanda, significantly impacting student engagement and learning outcomes.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                <h3 className="font-semibold mb-2 text-sm">Key Achievements</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Established maker spaces in 20+ Rwandan schools</li>
                  <li>• Impacted 769 students directly</li>
                  <li>• Increased engagement by 37%</li>
                  <li>• Created interactive engineering curricula</li>
                </ul>
              </div>
              <div className="text-gray-600">
                <p className="mb-2">Tufts Center for Engineering Education and Outreach</p>
                <p className="mb-4">Mar 2023 - Present</p>
                <a 
                  href="https://ceeo.tufts.edu" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                  style={{ color: '#a5c8cf', transition: 'color 0.2s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#e3cdb8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#a5c8cf'}
                >
                  Learn More <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Research;