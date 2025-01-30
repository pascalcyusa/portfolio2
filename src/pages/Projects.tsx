import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">          
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">TDK CH101 Ultrasonic Sensor Data Collection</h2>
                <p className="text-xl text-gray-700 mb-6">
                  Automated data collection system for ultrasonic sensor testing and validation.
                </p>
                <p className="text-gray-700 mb-4">
                  Developed a comprehensive data collection and analysis system for TDK's CH101 ultrasonic sensors, 
                  enabling automated testing and validation procedures. The system incorporates real-time data 
                  processing and visualization capabilities.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                  <h3 className="font-semibold mb-2 text-sm">Key Features</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Automated data collection pipeline</li>
                    <li>• Real-time sensor data visualization</li>
                    <li>• Statistical analysis tools</li>
                    <li>• Custom calibration algorithms</li>
                  </ul>
                </div>

                <div className="text-gray-600">
                  <p className="mb-2">Embedded Systems / Data Automation</p>
                  <p className="mb-4">2024</p>
                  <a 
                    href="https://github.com/pascalcyusa/wind-tunnel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                    style={{ color: '#a5c8cf', transition: 'color 0.2s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#e3cdb8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a5c8cf'}
                  >
                    GitHub <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800&q=80"
                  alt="TDK CH101 Project"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* First project - Right side */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div className="order-2 md:order-1">
                <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800&q=80"
                    alt="TDK CH101 Project"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4">TDK CH101 Ultrasonic Sensor Data Collection</h2>
                <p className="text-xl text-gray-700 mb-6">
                  Automated data collection system for ultrasonic sensor testing and validation.
                </p>
                <p className="text-gray-700 mb-4">
                  Developed a comprehensive data collection and analysis system for TDK's CH101 ultrasonic sensors, 
                  enabling automated testing and validation procedures. The system incorporates real-time data 
                  processing and visualization capabilities.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                  <h3 className="font-semibold mb-2 text-sm">Key Features</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Automated data collection pipeline</li>
                    <li>• Real-time sensor data visualization</li>
                    <li>• Statistical analysis tools</li>
                    <li>• Custom calibration algorithms</li>
                  </ul>
                </div>

                <div className="text-gray-600">
                  <p className="mb-2">Embedded Systems / Data Automation</p>
                  <p className="mb-4">2024</p>
                  <a 
                    href="https://github.com/pascalcyusa/tdk-ch101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                    style={{ color: '#a5c8cf', transition: 'color 0.2s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#e3cdb8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a5c8cf'}
                  >
                    GitHub <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Second project - Left side (original layout) */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Robotics Laboratory Development</h2>
                <p className="text-xl text-gray-700 mb-6">
                  Created comprehensive robotics laboratory curriculum and infrastructure.
                </p>
                <p className="text-gray-700 mb-4">
                  Led the development of a state-of-the-art robotics laboratory, designing curriculum 
                  and implementing hands-on learning experiences for engineering students.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                  <h3 className="font-semibold mb-2 text-sm">Key Features</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Custom-designed robotics workstations</li>
                    <li>• Interactive learning modules</li>
                    <li>• Real-world project implementations</li>
                    <li>• Industry-standard equipment integration</li>
                  </ul>
                </div>

                <div className="text-gray-600">
                  <p className="mb-2">Robotics / Education</p>
                  <p className="mb-4">2023</p>
                  <a 
                    href="https://robotics-lab.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                    style={{ color: '#a5c8cf', transition: 'color 0.2s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#e3cdb8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a5c8cf'}
                  >
                    Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
                  alt="Robotics Laboratory"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Third project - Right side */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div className="order-2 md:order-1">
                <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                    alt="Wind Tunnel System"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4">Wind Tunnel Testing System</h2>
                <p className="text-xl text-gray-700 mb-6">
                  Designed and implemented advanced wind tunnel testing infrastructure.
                </p>
                <p className="text-gray-700 mb-4">
                  Engineered a sophisticated wind tunnel testing system for aerodynamic analysis, 
                  featuring automated data collection and real-time visualization capabilities.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                  <h3 className="font-semibold mb-2 text-sm">Key Features</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• High-precision sensors</li>
                    <li>• Automated test sequences</li>
                    <li>• Real-time data analysis</li>
                    <li>• Custom visualization software</li>
                  </ul>
                </div>

                <div className="text-gray-600">
                  <p className="mb-2">Aerodynamics / Testing</p>
                  <p className="mb-4">2023</p>
                  <a 
                    href="https://github.com/pascalcyusa/wind-tunnel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                    style={{ color: '#a5c8cf', transition: 'color 0.2s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#e3cdb8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a5c8cf'}
                  >
                    GitHub <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth project - Left side */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Smart Manufacturing System</h2>
                <p className="text-xl text-gray-700 mb-6">
                  Developed an IoT-based smart manufacturing monitoring system.
                </p>
                <p className="text-gray-700 mb-4">
                  Created an innovative smart manufacturing system that integrates IoT sensors, 
                  real-time monitoring, and predictive maintenance capabilities.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                  <h3 className="font-semibold mb-2 text-sm">Key Features</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• IoT sensor integration</li>
                    <li>• Real-time monitoring dashboard</li>
                    <li>• Predictive maintenance algorithms</li>
                    <li>• Cloud-based data storage</li>
                  </ul>
                </div>

                <div className="text-gray-600">
                  <p className="mb-2">Industrial Automation</p>
                  <p className="mb-4">2023</p>
                  <a 
                    href="https://smart-manufacturing.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                    style={{ color: '#a5c8cf', transition: 'color 0.2s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#e3cdb8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a5c8cf'}
                  >
                    GitHub <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                  <a 
                    href="https://github.com/pascalcyusa/smart-manufacturing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 mr-6"
                  >
                    Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                  <a 
                    href="https://github.com/pascalcyusa/smart-manufacturing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700"
                    style={{ color: '#a5c8cf', transition: 'color 0.2s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#e3cdb8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a5c8cf'}
                  >
                    GitHub <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80"
                  alt="Smart Manufacturing"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Add more projects here with the same structure */}
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;