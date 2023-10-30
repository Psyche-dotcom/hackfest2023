import React, { useState } from "react";
import InputFeid from "./InputFeid";
import { fetchData } from "@/utils/ApiCall";

const BookRide = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  const [travel, settravel] = useState([]);
  const [qoutestate, setqoutestate] = useState(false);
  const GetRideQoute = async () => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const Url = `${process.env.NEXT_PUBLIC_BaseUrl}api/book/getqoute?pickup=${pickup}&destination=${destination}`;
    try {
      const getData = await fetchData(Url, token);
      if (getData != null) {
        setqoutestate(true);
        settravel(getData);
      }
    } catch (e) {
      alert(e);
    }
  };
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
      {qoutestate && (
        <p>The amount for the trip is {travel.amount} nasa token</p>
      )}
      {qoutestate ? (
        <button
          type="button"
          className="bg-mainc py-2 mt-2 text-white rounded-2xl hover:text-blackt"
          id="submitbtn"
        >
          Pay for trip
        </button>
      ) : (
        <button
          type="button"
          className="bg-mainc py-2 mt-2 text-white rounded-2xl hover:text-blackt"
          id="submitbtn"
          onClick={GetRideQoute}
        >
          Get Price Qoute
        </button>
      )}
    </form>
  );
};

export default BookRide;
