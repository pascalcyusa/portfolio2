import { useState } from 'react';
import { timelineData } from "@/data/timelineData";

const Summary = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <div className="animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-8">
          Hi there!
        </h2>
      </div>

      {/* Profile */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 animate-fade-in p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white/50 relative">
        {/* Corner Stickers */}
        <div className="absolute -top-3 -left-3 w-8 h-8 transform hover:rotate-12 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a5c8cf" className="w-full h-full">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm4-6c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
          </svg>
        </div>
        <div className="absolute -top-3 -right-3 w-8 h-8 transform hover:-rotate-12 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e3cdb8" className="w-full h-full">
            <path d="M12 2.5c-1.1 0-2 .9-2 2v7l-2 2v2h8v-2l-2-2v-7c0-1.1-.9-2-2-2zm-4 17.5c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2h-8zm10-12v-2h-2v2h-2l3 3 3-3h-2z" />
          </svg>
        </div>
        <div className="absolute -bottom-3 -left-3 w-8 h-8 transform hover:rotate-12 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a5c8cf" className="w-full h-full">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 2v2h-6V6h6zM4 6h6v2H4V6zm0 12v-8h16v8H4z" />
          </svg>
        </div>
        <div className="absolute -bottom-3 -right-3 w-8 h-8 transform hover:-rotate-12 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e3cdb8" className="w-full h-full">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h6v-2h-4V7z" />
          </svg>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-[2rem] overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-xl" style={{ background: 'linear-gradient(45deg, #a5c8cf, #e3cdb8)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#a5c8cf]/20 to-[#e3cdb8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img
            src="/images/profile2.jpg"
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 flex items-center justify-center text-center md:text-left space-y-4">
          {/* <h2 className="text-2xl md:text-3xl font-bold">Pascal Cyusa</h2> */}
          <p className="text-lg md:text-xl lg:text-2xl text-center text-gray-600 max-w-2xl mx-auto">
            I'm Pascal, a rising junior at Tufts University majoring in Mechanical Engineering and a minor in Computer Science. My interests range from robotics, MEMS devices, and building web applications.
            Outside the classroom, I love playing soccer and I enjoy watching sci-fi/thriller movies and series.
          </p>
        </div>
      </div>
      {/* Desktop Timeline */}
      {/* <div className="hidden md:block relative animate-fade-in">
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
      </div> */}

      {/* Mobile Timeline */}
      {/* <div className="md:hidden space-y-4">
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
      </div> */}
    </div>
  );
};

export default Summary;
