import React from "react";

const Seat = ({ seatId, selected, onClick }) => {
  let bgColor = "bg-gray-200";
  if (selected) {
    bgColor = selected.gender === "male" ? "bg-blue-500" : "bg-pink-400";
  }

  return (
    <div
      className={`w-10 h-10 rounded-md flex items-center justify-center cursor-pointer text-white ${bgColor}`}
      onClick={onClick}
      title={seatId}
    >
      {seatId}
    </div>
  );
};

export default Seat;
