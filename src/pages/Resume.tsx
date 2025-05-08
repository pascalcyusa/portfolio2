import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow pt-20">
        <div className="container mx-auto px-4">
          <iframe
            src="https://tufts.app.box.com/embed/s/9pzi0bz9fvg906gihf2uxnzhy0iiaf88?sortColumn=date"
            className="w-full h-[calc(100vh-120px)] border-0"
            title="Resume PDF"
            style={{ border: 'none' }}
            allowFullScreen={true}
            allow="fullscreen"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
