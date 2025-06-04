"use client";

export const downloadResume = () => {
  const googleDocId = "1h4vQPbc6u0ggf3sT6X3Cetvc0_d3k2XRw7Ne3ubglRM";
  const downloadUrl = `https://docs.google.com/document/d/${googleDocId}/export?format=pdf&id=${googleDocId}&export=download`;

    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "AJITHKANNA_RESUME.pdf"; // Optional: name the file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
