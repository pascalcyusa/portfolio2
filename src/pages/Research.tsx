import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { researchProjects } from "@/data/researchData";

const Research = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-24">
        <div className="mb-16">
        </div>
        
        {researchProjects.map((project, index) => (
          <div key={project.id}>
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                <div className={index % 2 === 1 ? "order-2 md:order-1" : ""}>
                  <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                    <h3 className="font-semibold mb-2 text-sm">Key Achievements</h3>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-gray-600">
                    <p className="mb-2">{project.institution}</p>
                    <p className="mb-4">{project.period}</p>
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                        style={{ color: '#a5c8cf', transition: 'color 0.2s ease' }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#e3cdb8'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#a5c8cf'}
                      >
                        View Research <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <div className={`bg-gray-100 rounded-lg h-[400px] flex items-center justify-center ${index % 2 === 1 ? "order-1 md:order-2" : ""}`}>
                  <img 
                    src={project.image}
                    alt={`${project.title} Research`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            {index < researchProjects.length - 1 && (
              <div className="max-w-4xl mx-auto my-16">
                <Separator className="bg-gray-200" />
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Research;