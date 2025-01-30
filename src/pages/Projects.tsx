import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">          
          {/* First project - Right side */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div className="order-2 md:order-1">
                <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
                <img 
                    src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=800&q=80"
                    alt="Mechanical Gripper Project"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4">Pokémon Ball Gripper</h2>
                <p className="text-xl text-gray-700 mb-6">
                  Mechanical gripper system designed to safely handle and transport Poké Balls using stepper motor actuation.
                </p>
                <p className="text-gray-700 mb-4">
                  Engineered a custom mechanical gripper incorporating both linkages and gears, 
                  capable of precisely grabbing and transporting Poké Balls. The system features 
                  stepper motor actuation and meets strict design constraints for controlled manipulation 
                  without direct ball contact.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                  <h3 className="font-semibold mb-2 text-sm">Key Features</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Custom-designed linkage and gear system</li>
                    <li>• Stepper motor-controlled actuation</li>
                    <li>• 2ft transport capability</li>
                    <li>• Non-contact ball manipulation</li>
                  </ul>
                </div>

                <div className="text-gray-600">
                  <p className="mb-2">Mechanical Design / Robotics</p>
                  <p className="mb-4">2024</p>
                  <a 
                    href="https://github.com/yourusername/pokemon-gripper"
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
                    {/* Second project - Left side */}
                    <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">TDK CH101 Ultrasonic Sensor Automation</h2>
                <p className="text-xl text-gray-700 mb-6">
                  Data collection automation system for ultrasonic sensors using C and LabVIEW integration.
                </p>
                <p className="text-gray-700 mb-4">
                  Tasked with learning and configuring the TDK CH101 chip's source code in C for efficient data collection from ultrasonic sensors. 
                  Integrated C code with LabVIEW to automate the data collection process, improving speed and accuracy in sensor data acquisition.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                  <h3 className="font-semibold mb-2 text-sm">Key Features</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• C and LabVIEW integration</li>
                    <li>• Automated data collection</li>
                    <li>• Streamlined interface</li>
                    <li>• Real-time data processing</li>
                  </ul>
                </div>

                <div className="text-gray-600">
                  <p className="mb-2">Sensors / Data Automation</p>
                  <p className="mb-4">Summer 2024</p>
                  <a 
                    href="https://github.com/yourusername/tdk-ch101-automation"
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
                  alt="Ultrasonic Sensor System"
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
                    src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80"
                    alt="LEGO Robotics"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4">LEGO & Arduino Education</h2>
                <p className="text-xl text-gray-700 mb-6">
                  Educational robotics projects using LEGO Mindstorms and Arduino.
                </p>
                <p className="text-gray-700 mb-4">
                  Worked on projects using LEGO Mindstorms and Spike Prime to build sensor-controlled robots and cars, 
                  teaching students programming and engineering skills. Implemented Python libraries and Arduino integration 
                  for enhanced project functionality.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                  <h3 className="font-semibold mb-2 text-sm">Key Features</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• LEGO Mindstorms integration</li>
                    <li>• Python and Arduino programming</li>
                    <li>• Sensor-controlled robots</li>
                    <li>• Eco-friendly solutions</li>
                  </ul>
                </div>

                <div className="text-gray-600">
                  <p className="mb-2">Education / Robotics</p>
                  <p className="mb-4">Summer 2023</p>
                  <a 
                    href="https://github.com/yourusername/lego-arduino-education"
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
                <h2 className="text-3xl font-bold mb-4">Splendor Game</h2>
                <p className="text-xl text-gray-700 mb-6">
                  Terminal-based implementation of the Splendor board game in C++.
                </p>
                <p className="text-gray-700 mb-4">
                  Built a terminal-based Splendor game using object-oriented programming in C++, 
                  ensuring easy debugging and file handling. Developed custom functions to enforce 
                  game rules and enhance user experience.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                  <h3 className="font-semibold mb-2 text-sm">Key Features</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Object-oriented design</li>
                    <li>• Custom game rule enforcement</li>
                    <li>• File handling system</li>
                    <li>• Terminal-based UI</li>
                  </ul>
                </div>

                <div className="text-gray-600">
                  <p className="mb-2">C++ / Game Development</p>
                  <p className="mb-4">Spring 2023</p>
                  <a 
                    href="https://github.com/yourusername/splendor-game"
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
                  src="https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=800&q=80"
                  alt="Splendor Game"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Fifth project - Right side */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div className="order-2 md:order-1">
                <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                    alt="Personal Website"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4">Personal Website</h2>
                <p className="text-xl text-gray-700 mb-6">
                  Responsive portfolio website built with modern web technologies.
                </p>
                <p className="text-gray-700 mb-4">
                  Created a personal website to demonstrate web programming skills, using Bootstrap 
                  for responsive and user-friendly design. Implemented version control through GitHub 
                  and deployed using Netlify.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                  <h3 className="font-semibold mb-2 text-sm">Key Features</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Responsive design</li>
                    <li>• Bootstrap framework</li>
                    <li>• GitHub integration</li>
                    <li>• Netlify deployment</li>
                  </ul>
                </div>

                <div className="text-gray-600">
                  <p className="mb-2">Web Development</p>
                  <p className="mb-4">Sept 2022</p>
                  <a 
                    href="https://github.com/yourusername/personal-website"
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;