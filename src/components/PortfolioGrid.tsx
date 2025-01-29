import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "tdk-ch101",
    title: "TDK CH101 Ultrasonic Sensor Data Collection",
    category: "Embedded Systems / Data Automation",
    image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "robotics-lab",
    title: "Robotics Laboratory Development",
    category: "Robotics / Education",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "wind-tunnel",
    title: "Wind Tunnel Testing System",
    category: "Aerodynamics / Testing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "smart-manufacturing",
    title: "Smart Manufacturing System",
    category: "Industrial Automation",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "autonomous-robot",
    title: "Autonomous Mobile Robot",
    category: "Robotics / AI",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "vibration-monitoring",
    title: "Vibration Monitoring Platform",
    category: "Mechanical Systems",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=800&q=80",
  },
];

const PortfolioGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="portfolio-overlay">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 mb-4">{item.category}</p>
              <Link
                to="/projects"
                className="inline-flex items-center text-white hover:text-gray-200"
              >
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;