const Hero = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        This is a wesbite for showcasing my work in ME 35 Intro to Robotics
      </h1>
      <div className="mt-8 space-x-4">
        <a href="https://github.com/pascalcyusa" target="_blank" rel="noopener noreferrer">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">
            Github
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;