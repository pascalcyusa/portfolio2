import { Cog } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[63vh] w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Hero Video */}
        {/* <iframe
          src="https://www.youtube.com/embed/_pSYopTb36M?start=25&end=114&autoplay=1&mute=1&loop=1&playlist=_pSYopTb36M&controls=0"
          className="w-[177.78vh] h-full min-w-full min-h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ border: 'none' }}
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
          title="CNC Machining Video"
        ></iframe> */}
        {/* Hero Image*/}
        <img
          src="/images/hero-bg.jpeg"
          alt="Homepage background"
          className="object-cover object-center w-full h-full animate-float"
        />
      </div>
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