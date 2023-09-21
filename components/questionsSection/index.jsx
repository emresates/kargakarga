import React from "react";

const Question = ({ index, question, answer, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  const toggleFAQ = () => {
    setOpenIndex(isOpen ? -1 : index);
  };

  return (
    <div className="mb-4">
      <div
        onClick={toggleFAQ}
        className="flex cursor-pointer items-center justify-between rounded-lg p-8"
      >
        <h2 className="text-xl font-semibold">{question}</h2>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <div className="mt-2 rounded-lg bg-white px-8 py-4">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
