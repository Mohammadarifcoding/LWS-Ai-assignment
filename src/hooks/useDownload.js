export const useDownloadImage = () => {
  return async (url, filename = 'download.png') => {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click(); // <-- THIS is what triggers the download
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  };
};
