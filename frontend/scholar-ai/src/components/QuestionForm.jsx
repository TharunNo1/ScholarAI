import React, { useState } from "react";
import axios from "axios";

export default function QuestionForm({ pdfId, onAnswer }) {
  const [question, setQuestion] = useState("");

  const askQuestion = async () => {
    if (!question) return alert("Enter a question.");
    if (!pdfId) return alert("Upload a PDF first.");

    console.log(question, pdfId)

    try {
      const res = await axios.post("http://localhost:8000/qa/ask", {
        question: question,
        pdf_id: pdfId,
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      onAnswer(res.data.answer || "No answer returned.");
    } catch (err) {
      onAnswer("Error getting answer.");
      console.error(err);
    }
  };

  return (
    <div className="my-4">
      <label className="block font-semibold mb-2">Ask a Question</label>
      <textarea
        className="w-full p-2 border rounded"
        rows={3}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={askQuestion} className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
        Ask
      </button>
    </div>
  );
}
