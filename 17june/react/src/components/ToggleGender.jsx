import React from "react";

const ToggleGender = ({ gender, setGender }) => {
  return (
    <div className="flex items-center gap-4">
      <label className="font-medium">Select Gender:</label>
      <button
        className={`px-4 py-1 rounded ${gender === "male" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => setGender("male")}
      >
        Male
      </button>
      <button
        className={`px-4 py-1 rounded ${gender === "female" ? "bg-pink-400 text-white" : "bg-gray-200"}`}
        onClick={() => setGender("female")}
      >
        Female
      </button>
    </div>
  );
};

export default ToggleGender;
