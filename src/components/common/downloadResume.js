"use client";

import { useState } from "react";

export const useResumeDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadResume = () => {
    
    // GOOGLE DOCS METHOD
    // const googleDocId = "1qpPqnaCXlvKAJNea3Vo-KmxpJiwxBrI-Pkhb8WEFm9M";
    // const downloadUrl = `https://docs.google.com/document/d/${googleDocId}/export?format=pdf&id=${googleDocId}&export=download`;
    
    // GOOGLE DRIVE METHOD
    const fileId = "1F2d9sIX1mQp0VtfldEUhqQGtYoEzHQIF";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

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
