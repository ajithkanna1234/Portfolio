"use client";

import { useState } from "react";

export const useResumeDownload = (downloadUrl) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadResume = (source = 'docs') => {
    setIsDownloading(true);

    try {
      let downloadUrl;
      
      // Condition 1: Google Docs (Recommended - No CORS)
      if (source === 'docs') {
        const googleDocId = "1qpPqnaCXlvKAJNea3Vo-KmxpJiwxBrI-Pkhb8WEFm9M";
        downloadUrl = `https://docs.google.com/document/d/${googleDocId}/export?format=pdf`;
      }
      
      // Condition 2: Google Drive
      else if (source === 'drive') {
        const fileId = "1F2d9sIX1mQp0VtfldEUhqQGtYoEzHQIF";
        downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      }
      
      // Condition 3: Local file (if you add PDF to public folder)
      else if (source === 'local') {
        downloadUrl = '/AJITHKANNA_RESUME.pdf';
      }
      
      // Condition 4: Download as DOCX
      else if (source === 'docx') {
        const googleDocId = "1qpPqnaCXlvKAJNea3Vo-KmxpJiwxBrI-Pkhb8WEFm9M";
        downloadUrl = `https://docs.google.com/document/d/${googleDocId}/export?format=docx`;
      }
      
      // Default fallback
      else {
        const googleDocId = "1qpPqnaCXlvKAJNea3Vo-KmxpJiwxBrI-Pkhb8WEFm9M";
        downloadUrl = `https://docs.google.com/document/d/${googleDocId}/export?format=pdf`;
      }

      // Create and trigger download
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = source === 'docx' ? 'AJITHKANNA_RESUME.docx' : 'AJITHKANNA_RESUME.pdf';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      
      document.body.appendChild(a);
      a.click();
      
      // Cleanup
      setTimeout(() => {
        document.body.removeChild(a);
        setIsDownloading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
      alert('Failed to download resume. Please try again.');
    }
  };

  return { downloadResume, isDownloading };
};
