interface AdobeDC {
  View: new (options: { clientId: string; divId: string }) => {
    previewFile: (options: {
      content: { location: { url: string } };
      metaData: { fileName: string };
    }) => void;
  };
}

interface Window {
  AdobeDC: AdobeDC;
}