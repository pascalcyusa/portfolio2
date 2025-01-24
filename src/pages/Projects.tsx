import Navigation from "@/components/Navigation";
import PortfolioGrid from "@/components/PortfolioGrid";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <PortfolioGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;