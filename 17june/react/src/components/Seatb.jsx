import React from "react";
import Seat from "./Seat";

const ROWS = 6;
const COLUMNS = 2;
const SEAT_LETTERS = ["E","F"];

const SeatGridb = ({ selectedSeats, toggleSeat }) => {
  const renderRows = () => {
    const rows = [];

    for (let row = 1; row <= ROWS; row++) {
      const rowSeats = [];

      for (let col = 0; col < COLUMNS; col++) {
        const seatId = `${SEAT_LETTERS[col]}${row}`;
        const type = selectedSeats[seatId]?.type || null;

        rowSeats.push(
          <Seat
            key={seatId}
            seatId={seatId}
            seatType={type}
            toggleSeat={toggleSeat}
          />
        );
      }
   
      
      rows.push(
        <div key={row} className="flex justify-center">
          {rowSeats}
        </div>
      );
    }

    return rows;
  };

  return <div>{renderRows()}</div>;
};

export default SeatGridb;
