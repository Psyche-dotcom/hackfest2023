import React, { useState } from "react";
import InputFeid from "./InputFeid";
import { postData } from "@/utils/ApiCall";

const RequestFund = () => {
  const [borrower, setborrower] = useState("");
  const [amount, setamount] = useState("");

  const RequestForFund = async (e) => {
    e.preventDefault();
    const token = `Bearer ${localStorage.getItem("token")}`;
    console.log(token);
    const Url = `${process.env.NEXT_PUBLIC_BaseUrl}api/peerlend/requestfund?amount=${amount}&lenderid=${borrower}`;
    try {
      const responseInfo = await postData(Url, token);
      // const responseInfo = fetch(
      // const requestOptions = {
      //   method: "POST", // HTTP method
      //   headers: {
      //     "Content-Type": "application/json", // Specify the content type
      //     // Add any additional headers if needed
      //   },
      // };
      console.log("Request fund page bro!");
      console.log(responseInfo);
    } catch (e) {
      alert(e);
    }
    // const requestOptions = {
    //   method: "POST", // HTTP method
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: token,
    //   },
    // };

    // Make the POST request using the Fetch API
    // fetch(Url, requestOptions)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response;
    //   })
    //   .then((data) => {
    //     // Handle the response data here
    //     console.log("Response data:", data);
    //   })
    //   .catch((error) => {
    //     // Handle any errors that occurred during the fetch
    //     console.error("Fetch error:", error);
    //   });
  };

  return (
    <form className="flex flex-col gap-2 mt-2">
      <div className="flex gap-4 justify-between">
        <InputFeid
          title={"Lender Id"}
          type={"text"}
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
        type="submit"
        className="bg-mainc py-2 mt-2 text-white rounded-2xl hover:text-blackt"
        id="submitbtn"
        onClick={RequestForFund}
      >
        Request Fund
      </button>
    </form>
  );
};

export default RequestFund;
