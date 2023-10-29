import React, { useState } from "react";
import InputFeid from "./InputFeid";

const PurchaseNasa = () => {
  const [nasa, setnasa] = useState("");

  return (
    <form className="flex flex-col gap-2 mt-2">
      <div className="flex gap-4 justify-between">
        <InputFeid
          title={"Nasa Amount"}
          type={"number"}
          id={"amount"}
          setstate={(e) => setnasa(e)}
        />
      </div>
      <button
        className="bg-mainc py-2 mt-2 text-white rounded-2xl hover:text-blackt"
        id="submitbtn"
      >
        Buy Nasa
      </button>
    </form>
  );
};

export default PurchaseNasa;
