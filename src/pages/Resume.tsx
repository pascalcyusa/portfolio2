import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow pt-20">
        <div className="container mx-auto px-4">
          <iframe
            src="https://tufts.box.com/v/pascal-resume"
            className="w-full h-[calc(100vh-120px)] border-0"
            title="Resume PDF"
            allowFullScreen
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
