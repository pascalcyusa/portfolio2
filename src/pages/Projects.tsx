import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import ProjectEntry from "@/components/ProjectEntry";
import { projectData } from "@/data/projectData";
import { FilterBadge } from "@/components/ui/filter-badge";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Projects = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const location = useLocation();

  // Get unique categories from projectData
  const categories = Array.from(new Set(projectData.map(project => project.category)));

  // Filter projects based on selected categories
  const filteredProjects = selectedCategories.length > 0
    ? projectData.filter(project => selectedCategories.includes(project.category))
    : projectData;

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="mb-16 flex flex-wrap gap-4">
            {/* Render filter badges */}
            {categories.map(category => (
              <FilterBadge
                key={category}
                label={category}
                onClick={() => toggleCategory(category)}
                variant="default"
                selected={selectedCategories.includes(category)} // Pass selected state
              />
            ))}
          </div>

          {filteredProjects.map((project, index) => (
            <div key={project.id}>
              <ProjectEntry
                project={project}
                isReversed={index % 2 === 0}
              />
              {index < filteredProjects.length - 1 && (
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