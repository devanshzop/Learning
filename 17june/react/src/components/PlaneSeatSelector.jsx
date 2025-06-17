import React, { useState } from "react";
import SeatGrid from "./SeatGrid";
import SelectedSeatList from "./SelectedSeatList";
import SeatGridb from "./Seatb";


const PlaneSeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState({});
  const [selectedSeats2, setSelectedSeats2] = useState({});
  const [seatType, setSeatType] = useState("male");


  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) => {   
      if (prev[seatId] && prev[seatId].type === seatType) {
        console.log(prev[seatId]);
        const updated = { ...prev };
        delete updated[seatId];
        return updated;
      } else {
        return {
          ...prev,
          [seatId]: { type: seatType },
        }; 
        
      }
    });
  };

   const toggleSeat2 = (seatId) => {
    setSelectedSeats2((prev) => {   
      if (prev[seatId] && prev[seatId].type === seatType) {
        console.log(prev[seatId]);
        const updated = { ...prev };
        delete updated[seatId];
        return updated;
      } else {
        return {
          ...prev,
          [seatId]: { type: seatType },
        }; 
        
      }
    });
  };


  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold text-center mb-4"> Plane Seat Selector</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Select Type:</label>
        <select
          value={seatType}
          onChange={(e) => setSeatType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <SeatGrid selectedSeats={selectedSeats} toggleSeat={toggleSeat} />

       <h2 className="text-xl font-bold text-center mb-4"> Business Class</h2>
 <SeatGridb selectedSeats={selectedSeats2} toggleSeat={toggleSeat2} />

      {/* <SelectedSeatList selectedSeats={selectedSeats} /> */}
    </div>
  );
};

export default PlaneSeatSelector;
