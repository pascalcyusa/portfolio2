import { Cog } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[63vh] w-full overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/_pSYopTb36M?autoplay=1&mute=1&loop=1&playlist=_pSYopTb36M&controls=0&showinfo=0&start=5&end=15"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-4 whitespace-nowrap">Jean Pascal Cyusa Shyaka</h1>
        <div className="flex items-center gap-3 text-xl md:text-2xl text-white/90 mb-8">
          <Cog className="h-6 w-6 animate-spin-slow" />
          <span>Mechanical Engineering Portfolio</span>
        </div>
        <div className="mt-8 space-x-4">
          <a href="https://github.com/pascalcyusa" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center px-6 py-3 border border-white rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;