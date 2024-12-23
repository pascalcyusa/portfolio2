import { ArrowRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Aurora Abalone",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    link: "/project/aurora",
  },
  {
    id: 2,
    title: "Betur Gert Campaign",
    category: "Illustration",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    link: "/project/betur",
  },
  {
    id: 3,
    title: "Summer Vibes",
    category: "Illustration",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    link: "/project/summer",
  },
  {
    id: 4,
    title: "Smoothie Brand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    link: "/project/smoothie",
  },
];

const PortfolioGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="portfolio-overlay">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 mb-4">{item.category}</p>
              <a
                href={item.link}
                className="inline-flex items-center text-white hover:text-gray-200"
              >
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;