import React from 'react';
import { PortfolioDetail } from '../data/portfolioDetails';
import { FaFilePdf } from 'react-icons/fa'; // Import a PDF icon from a library like react-icons

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, projectId }) => {
  const [details, setDetails] = React.useState<PortfolioDetail | null>(null);

  React.useEffect(() => {
    if (isOpen && projectId) {
      // Import details dynamically
      import('../data/portfolioDetails').then(({ portfolioDetails }) => {
        const projectDetails = portfolioDetails.find(p => p.id === projectId);
        setDetails(projectDetails || null);
      });
    }
  }, [isOpen, projectId]);

  if (!isOpen || !details) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-3xl font-bold mb-4">{details.title}</h2>
        <p className="mb-6 text-gray-700">{details.content}</p>

        {/* PDF Link */}
        {details.pdfUrl && (
          <div className="mb-8">
            <a href={details.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-red-600 hover:text-red-800">
              <FaFilePdf className="mr-2" /> Project-Document
            </a>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {details.images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-sm text-gray-600">{image.caption}</p>
            </div>
          ))}
        </div>

        {details.videos && details.videos.length > 0 && (
          <div className="mb-8">
            {details.videos.map((video, index) => (
              <div key={index} className="mb-4">
                <video controls width="100%">
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="mt-2 text-sm text-gray-600">{video.caption}</p>
              </div>
            ))}
          </div>
        )}

        {details.technicalDetails && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Technical Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {details.technicalDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        )}

        {details.challenges && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Challenges</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {details.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}

        {details.outcomes && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Outcomes</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {details.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
        )}

        {details.futureImprovements && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Future Improvements</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {details.futureImprovements.map((improvement, index) => (
                <li key={index}>{improvement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};