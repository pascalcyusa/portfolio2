import React from 'react';
import { ProjectDetail } from '../data/projectDetails';
import { FaFilePdf } from 'react-icons/fa'; // Import a PDF icon from a library like react-icons

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, projectId }) => {
  const [details, setDetails] = React.useState<ProjectDetail | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseImageView = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    if (selectedImageIndex === null || !details.images) return;
    setSelectedImageIndex((selectedImageIndex + 1) % details.images.length);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex === null || !details.images) return;
    setSelectedImageIndex((selectedImageIndex - 1 + details.images.length) % details.images.length);
  };

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      switch (event.key) {
        case 'ArrowLeft':
          handlePrevImage();
          break;
        case 'ArrowRight':
          handleNextImage();
          break;
        case 'Escape':
          handleCloseImageView();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  React.useEffect(() => {
    if (isOpen && projectId) {
      // Import details dynamically
      import('../data/projectDetails').then(({ projectDetails }) => {
        const projectFieldDetails = projectDetails.find(p => p.id === projectId);
        setDetails(projectFieldDetails || null);
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
            <div key={index} className="relative cursor-pointer" onClick={() => handleImageClick(index)}>
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-sm text-gray-600">{image.caption}</p>
            </div>
          ))}
        </div>

        {selectedImageIndex !== null && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm" onClick={handleCloseImageView}>
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl"
              onClick={handleCloseImageView}
            >
              ×
            </button>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-3xl"
              onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
            >
              ‹
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-3xl"
              onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
            >
              ›
            </button>
            <div className="max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={details.images[selectedImageIndex].url}
                alt={details.images[selectedImageIndex].caption}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <p className="text-center text-white mt-4">{details.images[selectedImageIndex].caption}</p>
            </div>
          </div>
        )}

        {details.videos && details.videos.length > 0 && (
          <div className="mb-8">
            {details.videos.map((video, index) => {
              const videoId = video.url.includes('youtu.be/')
                ? video.url.split('youtu.be/')[1]
                : video.url.includes('watch?v=')
                  ? video.url.split('watch?v=')[1]
                  : video.url.split('/').pop();

              // Always add mute=1 to the embed URL
              const embedUrl = `https://www.youtube.com/embed/${videoId}?mute=1`;

              return (
                <div key={index} className="mb-4">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={embedUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{video.caption}</p>
                </div>
              );
            })}
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

        {details.personalContribution && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Personal Contribution</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {details.personalContribution.map((detail, index) => (
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