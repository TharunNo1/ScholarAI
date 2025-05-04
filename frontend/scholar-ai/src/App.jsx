import React, { useState } from "react";
import PDFUploader from "./components/PDFUploader";
import QuestionForm from "./components/QuestionForm";
import AnswerBox from "./components/AnswerBox";

export default function App() {
  const [pdfId, setPdfId] = useState(null);
  const [answer, setAnswer] = useState("");

  const handlePdfUpload = (pdfId) => {
    setPdfId(pdfId);
  };

  const handleAnswer = (answer) => {
    setAnswer(answer);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-lg p-8">
      <div className="text-center mb-6">
      <h2 className="text-3xl font-bold text-blue-600">AI-Powered Research Assistant</h2>
      <hr className="mt-3 w-1/4 mx-auto border-b-2 border-blue-600" />
    </div>

        <PDFUploader onUpload={handlePdfUpload} />

        <hr className="my-6 border-gray-300" />

        <QuestionForm pdfId={pdfId} onAnswer={handleAnswer} />

        <hr className="my-6 border-gray-300" />

        <AnswerBox answer={answer} />
      </div>
    </div>
  );
}
