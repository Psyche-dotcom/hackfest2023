import React, { useState } from "react";
import InputFeid from "./InputFeid";

const RequestFund = () => {
  const [borrower, setborrower] = useState("");
  const [amount, setamount] = useState("");

  return (
    <form className="flex flex-col gap-2 mt-2">
      <div className="flex gap-4 justify-between">
        <InputFeid
          title={"Borrower Email"}
          type={"email"}
          id={"borrow"}
          setstate={(e) => setborrower(e)}
        />
        <InputFeid
          title={"Amount"}
          type={"number"}
          id={"amount"}
          setstate={(e) => setamount(e)}
        />
      </div>
      <button
        className="bg-mainc py-2 mt-2 text-white rounded-2xl hover:text-blackt"
        id="submitbtn"
      >
        Request Fund
      </button>
    </form>
  );
};

export default RequestFund;
