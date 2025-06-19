import React, { useState } from "react";
import SeatGrid from "./SeatGrid";
import ToggleGender from "./ToggleGender";

const PlaneSeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState({});
  const [gender, setGender] = useState("male");

  const handleSeatClick = (seatId, section) => {
    setSelectedSeats((prev) => {
      const newSelection = { ...prev };
      if (newSelection[seatId]) {
        delete newSelection[seatId];
      } else {
        newSelection[seatId] = { gender, section };
      }
      return newSelection;
    });
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold">Plane Seat Selection</h2>

      <ToggleGender gender={gender} setGender={setGender} />

      <h3 className="font-semibold">Business Class</h3>
      <SeatGrid
        rows={3}
        columns={6}
        startRow={1}
        selectedSeats={selectedSeats}
        handleSeatClick={handleSeatClick}
        section="business"
      />

      <h3 className="font-semibold mt-6">Economy Class</h3>
      <SeatGrid
        rows={10}
        columns={6}
        startRow={4}
        selectedSeats={selectedSeats}
        handleSeatClick={handleSeatClick}
        section="economy"
      />
    </div>
  );
};

export default PlaneSeatSelector;
