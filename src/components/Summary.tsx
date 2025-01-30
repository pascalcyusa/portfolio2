import { useState } from 'react';
import { timelineData } from "@/data/timelineData";

const Summary = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-8">SUMMARY</h2>
      <p className="text-center text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
        Thanks for checking out my portfolio! Whether you're a recruiter, fellow engineer, friend, or lost stranger, I hope you enjoy the ride.
      </p>
      
      <div className="relative">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="w-full ml-0 md:ml-8">
              <div className="h-0.5 bg-gray-200 relative">
                {timelineData.map((item, index) => (
                  <div 
                    key={item.id} 
                    className={`absolute transform ${
                      index === 0 ? 'left-0' : 
                      index === timelineData.length - 1 ? 'right-0' : 
                      `left-[${(index / (timelineData.length - 1)) * 100}%]`
                    }`}
                  >
                    <div className="relative">
                      <div className={`min-w-[120px] px-3 py-2 -translate-x-1/2 text-center rounded-md shadow-md ${
                        item.isActive ? 'bg-orange-500 text-white' : 'bg-green-200'
                      }`}>
                        {item.jobTitle}
                      </div>
                      <div className="text-sm text-gray-600 mt-1 text-center -translate-x-1/2 whitespace-normal">
                        {item.phase}, {item.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Timeline View */}
      <div className="md:hidden mt-8 space-y-6">
        {timelineData.map((item) => (
          <div 
            key={item.id}
            className={`p-4 rounded-lg shadow-md ${
              item.isActive ? 'bg-orange-500 text-white' : 'bg-green-200'
            }`}
          >
            <h3 className="font-semibold">{item.jobTitle}</h3>
            <p className={`text-sm mt-1 ${item.isActive ? 'text-white/90' : 'text-gray-600'}`}>
              {item.phase}, {item.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;