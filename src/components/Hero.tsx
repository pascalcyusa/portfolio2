import { Cog } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[63vh] w-full overflow-hidden">
        <iframe
        className="absolute top-0 left-0 w-full h-full object-cover scale-150"
        src="https://www.youtube.com/embed/pyFECO1Sebo?autoplay=1&mute=1&loop=1&playlist=pyFECO1Sebo&controls=0&showinfo=0&start=0&end=20"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
        </iframe>
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-4 break-words sm:whitespace-nowrap">
          Jean Pascal Cyusa Shyaka
        </h1>
        <div className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
          <Cog className="h-5 w-5 sm:h-6 sm:w-6 animate-spin-slow" />
          <span>Mechanical Engineering Portfolio</span>
        </div>
        <div className="mt-4 sm:mt-8 space-x-4">
          <a href="https://github.com/pascalcyusa" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-white rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;