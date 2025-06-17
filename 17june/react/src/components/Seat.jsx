import React from "react";

const Seat = ({ seatId, seatType, toggleSeat }) => {
  let className = "w-12 h-12 m-1 rounded-md border text-sm font-semibold";

  if (seatType === "male") {
    className += " bg-blue-500 text-white";
  } else if (seatType === "female") {
    className += " bg-pink-500 text-white";
  } else {
    className += " bg-gray-200 hover:bg-gray-300";
  }

  return (
    <button onClick={() => toggleSeat(seatId)} className={className}>
      {seatId}
    </button>
  );
};

export default Seat;
