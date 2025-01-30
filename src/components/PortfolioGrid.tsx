import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "pokemon-gripper",
    title: "Pokémon Ball Gripper",
    category: "Mechanical Design / Robotics",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tdk-ch101",
    title: "TDK CH101 Ultrasonic Sensor Automation",
    category: "Sensors / Data Automation",
    image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lego-arduino",
    title: "LEGO & Arduino Education",
    category: "Education / Robotics",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "splendor-game",
    title: "Splendor Game",
    category: "C++ / Game Development",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "personal-website",
    title: "Personal Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
  },
];

const PortfolioGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((item, index) => (
          <div 
            key={item.id} 
            className="portfolio-item"
            style={{
              animation: `fade-in 0.5s ease-out ${index * 0.2}s`,
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="portfolio-overlay text-center px-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">{item.category}</p>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center text-white hover:text-gray-200 text-sm sm:text-base"
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