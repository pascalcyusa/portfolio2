import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Resume = () => {
  // https://drive.google.com/file/d/1bu-mJW9SFioMDwHTTl5-MDVr7xDeS7L6/view?usp=drive_link

  const googleDriveFileId = "1bu-mJW9SFioMDwHTTl5-MDVr7xDeS7L6";
  const googleDriveEmbedUrl = `https://drive.google.com/file/d/${googleDriveFileId}/preview`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow pt-20">
        <div className="container mx-auto px-4"> {/* This div centers the content block */}
          <iframe
            src={googleDriveEmbedUrl}
            // Adjust width: e.g., 80% of container, or responsive widths
            // Add mx-auto to center the iframe itself if its width is less than its parent
            // Adjust height: e.g., 70% or 75% of viewport height
            className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto h-[75vh] border-0 shadow-lg"
            // w-11/12: ~91% width on small screens
            // md:w-5/6: ~83% width on medium screens and up
            // lg:w-3/4:  75% width on large screens and up
            // xl:w-2/3: ~66% width on extra-large screens and up
            // mx-auto: Centers the iframe horizontally within the container div
            // h-[75vh]: Sets height to 75% of the viewport height
            // shadow-lg: (Optional) Adds a nice shadow for better visual separation
            title="Resume PDF"
            style={{ border: 'none' }} // You can keep this or rely on border-0 class
            allowFullScreen={true} // Still allow fullscreen if the user wants to expand it
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;