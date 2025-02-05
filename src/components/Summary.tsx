import { useState } from 'react';
import { timelineData } from "@/data/timelineData";

const Summary = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <div className="animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-8">SUMMARY</h2>
        <p className="text-center text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
          Thanks for checking out my portfolio! 
        </p>
      </div>
      
      {/* Desktop Timeline */}
      <div className="hidden md:block relative animate-fade-in">
        <div className="h-0.5 bg-gray-200 absolute top-10 left-0 right-0" />
        <div className="flex justify-between relative">
          {timelineData.map((item, index) => (
            <div 
              key={item.id} 
              className="relative flex-1 px-2"
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.2}s`,
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              <div className={`absolute w-4 h-4 rounded-full ${
                item.isActive ? 'bg-[#e3cdb8]' : 'bg-[#a5c8cf]'
              } left-1/2 top-[2.25rem] -translate-x-1/2 -translate-y-1/2`} />
              <div className={`mt-16 p-4 rounded-lg shadow-md ${
                item.isActive ? 'bg-[#e3cdb8] text-white' : 'bg-[#a5c8cf]'
              }`}>
                <h3 className="font-semibold text-lg">{item.jobTitle}</h3>
                <p className={`text-sm mt-1 ${item.isActive ? 'text-white/90' : 'text-gray-600'}`}>
                  {item.phase}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-4">
        {timelineData.map((item, index) => (
          <div 
            key={item.id}
            // ... and in the mobile version:
            className={`p-4 rounded-lg shadow-md ${
              item.isActive ? 'bg-[#e3cdb8] text-white' : 'bg-[#a5c8cf]'
            }`}
            style={{
              animation: `fade-in 0.5s ease-out ${index * 0.2}s`,
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            <h3 className="font-semibold text-lg">{item.jobTitle}</h3>
            <p className={`text-sm mt-1 ${item.isActive ? 'text-white/90' : 'text-gray-600'}`}>
              {item.phase}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
