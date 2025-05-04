import React from "react";

export default function AnswerBox({ answer }) {
  return (
    <div className="mt-6">
      <h3 className="font-semibold text-xl mb-3">Answer</h3>
      <div className="p-4 bg-gray-200 border rounded-lg text-gray-700">
        {answer || "No answer yet."}
      </div>
    </div>
  );
}
