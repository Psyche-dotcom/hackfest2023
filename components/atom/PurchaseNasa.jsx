import React, { useState } from "react";
import InputFeid from "./InputFeid";
import { postData } from "@/utils/ApiCall";
import { useRouter } from "next/router";

const PurchaseNasa = () => {
  const [nasa, setnasa] = useState("");
  const router = useRouter();

  const PayforNasa = async () => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const clientId = localStorage.getItem("clientid");
    // const queryParams = {
    //   userid: clientId,
    //   amount: parseFloat(nasa),
    // };
    const Url = `${process.env.NEXT_PUBLIC_BaseUrl}api/payment/initializepayment?userid=${clientId}&amount=${nasa}`;
    try {
      const responseInfo = await postData(Url, token);
      // console.log(responseInfo);
      router.push(responseInfo);
    } catch (e) {
      alert(e);
    }
  };

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
        type="button"
        className="bg-mainc py-2 mt-2 text-white rounded-2xl hover:text-blackt"
        id="submitbtn"
        onClick={PayforNasa}
      >
        Buy Nasa
      </button>
    </form>
  );
};

export default PurchaseNasa;
