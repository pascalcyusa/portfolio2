import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PortfolioGrid />
    </div>
  );
};

export default Index;