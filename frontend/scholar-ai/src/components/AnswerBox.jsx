import React from "react";

export default function AnswerBox({ answer }) {
  return (
    <div className="my-4">
      <h3 className="font-bold mb-2">Answer</h3>
      <div className="p-3 bg-white border rounded shadow">
        {answer || "No answer yet."}
      </div>
    </div>
  );
}
