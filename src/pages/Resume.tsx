import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from 'react';

declare global {
  interface Window {
    AdobeDC: AdobeDC;
  }
}

const Resume = () => {
  useEffect(() => {
    const loadPDF = async () => {
      if (window.AdobeDC) {
        const adobeDCView = new window.AdobeDC.View({
          clientId: "379080b5f6734b29879803bea6831657",
          divId: "pdf-viewer"
        });
        
        adobeDCView.previewFile({
          content: { location: { url: "/resume.pdf" } },
          metaData: { fileName: "Resume.pdf" }
        });
      }
    };
    
    if (window.AdobeDC) {
      loadPDF();
    } else {
      document.addEventListener("adobe_dc_view_sdk.ready", loadPDF);
    }
    
    return () => {
      document.removeEventListener("adobe_dc_view_sdk.ready", loadPDF);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow">
        <div id="pdf-viewer" className="w-full h-[calc(100vh-4rem)]" />
      </div>
      <Footer />
    </div>
  );
};

export default Resume;