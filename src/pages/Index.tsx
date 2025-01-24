import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navigation />
        <Hero />
        <PortfolioGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Index;