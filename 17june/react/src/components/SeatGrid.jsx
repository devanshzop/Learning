import React from "react";
import Seat from "./Seat";

const SeatGrid = ({
  rows,
  columns,
  startRow,
  selectedSeats,
  handleSeatClick,
  section,
}) => {
  const seatLetters = ["WA", "B", "C", "D", "E","WF"];

  return (
    <div className="space-y-2">
      {[...Array(rows)].map((_, rowIndex) => {
        const rowNumber = startRow + rowIndex;
        return (
          <div key={rowNumber} className="flex items-center gap-4">
            {seatLetters.map((letter, colIndex) => {
              const seatId = `${rowNumber}${letter}`;
              const isAisle = colIndex === 3;
              return (
                <React.Fragment key={seatId}>
                  {isAisle && <div className="w-6" />} 
                  <Seat
                    seatId={seatId}
                    selected={selectedSeats[seatId]}
                    onClick={() => handleSeatClick(seatId, section)}
                  />
                </React.Fragment>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SeatGrid;
