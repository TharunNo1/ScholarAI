import React, { useState } from "react";
import axios from "axios";

export default function QuestionForm({ pdfId, onAnswer }) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false); // <-- loading state

  const askQuestion = async () => {
    if (!question) return alert("Enter a question.");
    if (!pdfId) return alert("Upload a PDF first.");

    try {
      setLoading(true);  // start loading
      const res = await axios.post("http://localhost:8000/qa/ask", {
        question,
        pdf_id: pdfId,
      });
      onAnswer(res.data.answer || "No answer returned.");
    } catch (err) {
      onAnswer("Error getting answer.");
      console.error(err);
    } finally {
      setLoading(false);  // stop loading
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
        placeholder="Type your research question here..."
      />
      <button
        onClick={askQuestion}
        className="mt-2 bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Thinking..." : "Ask"}
      </button>
    </div>
  );
}
