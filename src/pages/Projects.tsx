import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import ProjectEntry from "@/components/ProjectEntry";
import { portfolioData } from "@/data/portfolioData";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">    
          <div className="mb-16">
          </div>
          
          {portfolioData.map((project, index) => (
            <div key={project.id}>
              <ProjectEntry 
                project={project} 
                isReversed={index % 2 === 0}
              />
              {index < portfolioData.length - 1 && (
                <Separator className="my-16 opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;