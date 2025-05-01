import React, { useState } from "react";
import axios from "axios";

export default function PDFUploader({ onUpload }) {
  const [pdfFile, setPdfFile] = useState(null);

  const handleUpload = async () => {
    if (!pdfFile) return alert("Select a PDF first.");
    const formData = new FormData();
    formData.append("pdf", pdfFile);

    try {
      const res = await axios.post("http://localhost:8000/pdf/upload-pdf", formData);
      onUpload(res.data.pdf_id);  // Pass PDF ID to parent
      console.log(res);
      alert("PDF uploaded!");
    } catch (err) {
      alert("Upload failed.");
      console.error(err);
    }
  };

  return (
    <div className="my-4">
      <label className="block font-semibold mb-2">Upload PDF</label>
      <input type="file" accept="application/pdf" onChange={(e) => setPdfFile(e.target.files[0])} />
      <button onClick={handleUpload} className="ml-4 bg-blue-600 text-white px-4 py-2 rounded">
        Upload
      </button>
    </div>
  );
}
