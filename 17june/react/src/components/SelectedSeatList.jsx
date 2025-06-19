import React from "react";

const SelectedSeatList = ({ selectedSeats }) => {
  const entries = Object.entries(selectedSeats);

  return (
    <div className="mt-4">
     
      {entries.length === 0 ? (
        <p></p>
      ) : (
        <ul className="list-disc ml-5">
          {entries.map(([seatId, { type }]) => (
            <li key={seatId}>
              {seatId} - {type.charAt(0).toUpperCase() + type.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectedSeatList;
