import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navigation />
        <Hero />
        <Summary />
        <div className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <h2 className="text-4xl font-bold mb-8 text-center">PROJECTS</h2>
          </div>
          <ProjectGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;