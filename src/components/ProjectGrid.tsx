import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectData } from "@/data/projectData";

const ProjectGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((item, index) => (
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
                to={`/projects#${item.id}`} // Ensure this matches the project ID
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

export default ProjectGrid;