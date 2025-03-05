import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from 'react';

// declare global {
//   interface Window {
//     AdobeDC: AdobeDC;
//   }
// }

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {/* Added pt-20 to create space below navigation */}
      <div className="flex-grow pt-20">
        <div className="container mx-auto px-4">
          <iframe
            src="/images/resume/Resume_CS.pdf"
            className="w-full h-[calc(100vh-120px)]"
            title="Resume PDF"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;