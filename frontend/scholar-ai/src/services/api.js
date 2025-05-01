import axios from "axios";

export const uploadPDF = (file) => {
  const formData = new FormData();
  formData.append("pdf", file);
  return axios.post("http://localhost:8000/upload-pdf", formData);
};

export const askQuestion = (question, pdf_id) =>
  axios.post("http://localhost:8000/qa/ask", { question, pdf_id });
