import React, { useState } from "react";
import InputFeid from "./InputFeid";
import { fetchData, postDataAuth } from "@/utils/ApiCall";
import Modal from "../Modal";

const BookRide = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  const [travel, settravel] = useState([]);
  const [qoutestate, setqoutestate] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
  console.log(travel);
  const PayforRide = async () => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const Url = `${process.env.NEXT_PUBLIC_BaseUrl}api/book/takeride`;
    try {
      var data = {
        clientId: localStorage.getItem("clientid"),
        tripId: travel.id,
        driverId: "ca721156-0e3a-4d85-8b21-1bfa37dc1af6",
      };
      console.log(data.tripId + "Is the trip uniqu id.");
      const getData = await postDataAuth(Url, data, token);
      if (getData != null) {
        setqoutestate(true);
        settravel(getData);
        setShowModal(true);
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <>
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
            onClick={PayforRide}
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
      {showModal && <Modal pickup={pickup} destination={destination} />}
    </>
  );
};

export default BookRide;
