import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const Research = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-24">
        
        <div className="mb-16">
          <p className="text-xl text-gray-700 max-w-3xl">
            Research experiences focused on innovative sensor technology and educational outreach, 
            combining technical expertise with practical applications to create meaningful impact 
            in both engineering and education sectors.
          </p>
        </div>

        {/* Microscale Sensors Lab Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ultrasonic Sensor Research</h2>
              <p className="text-gray-700 mb-4">
                Development and optimization of miniature ultrasonic anemometer technology, 
                pushing the boundaries of sensor accuracy and reliability for high-altitude UAV applications. 
                This research established new benchmarks in wind velocity measurements and distance sensing precision.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                <h3 className="font-semibold mb-2 text-sm">Key Achievements</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Achieved ± 0.1878 mm precision in distance measurements</li>
                  <li>• Reduced wind velocity errors to ± 0.6454 m/s</li>
                  <li>• Targeting future accuracy of ±0.05 m/s</li>
                </ul>
              </div>
              <div className="text-gray-600">
                <p className="mb-2">Microscale Sensors and Systems Lab</p>
                <p className="mb-4">Jun 2024 - Present</p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700">
                  Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800&q=80"
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
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                alt="Educational Innovation"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Educational Innovation</h2>
              <p className="text-gray-700 mb-4">
                Pioneering STEM education initiatives through the development of hands-on 
                engineering curricula and establishment of maker spaces, creating lasting 
                impact on international education communities through technology integration 
                and practical learning approaches.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                <h3 className="font-semibold mb-2 text-sm">Impact Metrics</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Established 20+ maker spaces in Rwanda</li>
                  <li>• Impacted 769 students directly</li>
                  <li>• Increased student engagement by 37%</li>
                </ul>
              </div>
              <div className="text-gray-600">
                <p className="mb-2">Tufts Center for Engineering Education and Outreach</p>
                <p className="mb-4">Mar 2023 - Present</p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700">
                  Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
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