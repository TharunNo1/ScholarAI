import React, { useState } from "react";
import axios from "axios";

export default function PDFUploader({ onUpload }) {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfName, setPdfName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPdfFile(file);
    setPdfName(file.name);
  };

  const handleUpload = async () => {
    if (!pdfFile) return alert("Select a PDF first.");
    const formData = new FormData();
    formData.append("pdf", pdfFile);

    try {
      const res = await axios.post("http://localhost:8000/pdf/upload-pdf", formData);
      onUpload(res.data.pdf_id);
      alert("PDF uploaded successfully!");
    } catch (err) {
      alert("Upload failed.");
      console.error(err);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-xl font-semibold mb-3">Upload PDF</label>
      <div className="flex items-center space-x-4">
        <input 
          type="file" 
          accept="application/pdf" 
          onChange={handleFileChange} 
          className="border p-3 rounded-lg w-full text-gray-700"
        />
        
      </div>
      <button
        onClick={handleUpload}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Upload
      </button>
    </div>
  );
}
