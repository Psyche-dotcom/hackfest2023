import React, { useState } from "react";
import InputFeid from "./InputFeid";

const BookRide = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  const [qoutestate, setqoutestate] = useState(true);
  return (
    <form className="flex flex-col gap-2 mt-2">
      <div className="flex gap-4 justify-between">
        <InputFeid
          title={"Pick up"}
          type={"text"}
          id={"pcikup"}
          setstate={(e) => setpickup(e)}
        />
        <InputFeid
          title={"Destination"}
          type={"text"}
          id={"destination"}
          setstate={(e) => setdestination(e)}
        />
      </div>
      {qoutestate ? (
        <button
          className="bg-mainc py-2 mt-2 text-white rounded-2xl hover:text-blackt"
          id="submitbtn"
        >
          Pay for trip
        </button>
      ) : (
        <button
          className="bg-mainc py-2 mt-2 text-white rounded-2xl hover:text-blackt"
          id="submitbtn"
        >
          Get Price Qoute
        </button>
      )}
    </form>
  );
};

export default BookRide;
