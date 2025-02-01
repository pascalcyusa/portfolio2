import { ArrowUpRight } from "lucide-react";
import { PortfolioItem } from "@/data/portfolioData";

interface ProjectEntryProps {
  project: PortfolioItem;
  isReversed?: boolean;
}

const ProjectEntry = ({ project, isReversed = false }: ProjectEntryProps) => {
  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
        <div className={isReversed ? "order-2 md:order-1" : ""}>
          {!isReversed && (
            <div className="h-full flex flex-col">
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-xl text-gray-700 mb-6">{project.description}</p>
              <p className="text-gray-700 mb-4">{project.longDescription}</p>
              
              <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                <h3 className="font-semibold mb-2 text-sm">Key Features</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  {project.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="text-gray-600 mt-auto">
                <p className="mb-2">{project.category}</p>
                <p className="mb-4">{project.year}</p>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                    style={{ color: '#a5c8cf', transition: 'color 0.2s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#e3cdb8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a5c8cf'}
                  >
                    GitHub <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          )}
          {isReversed && (
            <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
        <div className={isReversed ? "order-1 md:order-2" : ""}>
          {isReversed && (
            <div className="h-full flex flex-col">
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-xl text-gray-700 mb-6">{project.description}</p>
              <p className="text-gray-700 mb-4">{project.longDescription}</p>
              
              <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                <h3 className="font-semibold mb-2 text-sm">Key Features</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  {project.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="text-gray-600 mt-auto">
                <p className="mb-2">{project.category}</p>
                <p className="mb-4">{project.year}</p>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                    style={{ color: '#a5c8cf', transition: 'color 0.2s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#e3cdb8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a5c8cf'}
                  >
                    GitHub <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          )}
          {!isReversed && (
            <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectEntry;