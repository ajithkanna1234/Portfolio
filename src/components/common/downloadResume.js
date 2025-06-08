"use client";

import { useState } from "react";

export const useResumeDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadResume = () => {
    const googleDocId = "1h4vQPbc6u0ggf3sT6X3Cetvc0_d3k2XRw7Ne3ubglRM";
    const downloadUrl = `https://docs.google.com/document/d/${googleDocId}/export?format=pdf&id=${googleDocId}&export=download`;

    setIsDownloading(true);

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';

    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'AJITHKANNA_RESUME.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
      setIsDownloading(false);
    });

    xhr.addEventListener('error', () => {
      setIsDownloading(false);
      // Handle error here
      console.error('Download failed');
    });

    xhr.open('GET', downloadUrl, true);
    xhr.send();
  };

  return { downloadResume, isDownloading };
};