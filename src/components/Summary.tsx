import { useState } from 'react';
import { timelineData } from "@/data/timelineData";

const Summary = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-8">SUMMARY</h2>
      <p className="text-center text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
        Thanks for checking out my portfolio! Whether you're a recruiter, fellow engineer, friend, or lost stranger, I hope you enjoy the ride.
      </p>
      
      {/* Desktop Timeline */}
      <div className="hidden md:block relative">
        <div className="h-0.5 bg-gray-200 absolute top-10 left-0 right-0" />
        <div className="flex justify-between relative">
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative flex-1 px-2">
              <div className={`absolute w-4 h-4 rounded-full ${
                item.isActive ? 'bg-orange-500' : 'bg-green-200'
              } left-1/2 top-[2.25rem] -translate-x-1/2 -translate-y-1/2`} />
              <div className={`mt-16 p-4 rounded-lg shadow-md ${
                item.isActive ? 'bg-orange-500 text-white' : 'bg-green-200'
              }`}>
                <h3 className="font-semibold text-lg">{item.jobTitle}</h3>
                <p className={`text-sm mt-1 ${item.isActive ? 'text-white/90' : 'text-gray-600'}`}>
                  {item.phase}, {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-4">
        {timelineData.map((item) => (
          <div 
            key={item.id}
            className={`p-4 rounded-lg shadow-md ${
              item.isActive ? 'bg-orange-500 text-white' : 'bg-green-200'
            }`}
          >
            <h3 className="font-semibold text-lg">{item.jobTitle}</h3>
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