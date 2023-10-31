import RequestFund from "@/components/atom/RequestFund";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DataTableAllUsers from "@/components/organism/DataTableAllUsers";
import DataTableBorrow from "@/components/organism/DataTableBorrow";
import DataTableDebt from "@/components/organism/DataTableDebt";
import { fetchData } from "@/utils/ApiCall";
import React, { useState, useEffect } from "react";

const Lend_nasa_token = () => {
  const [fundRequest, setFundRequest] = useState([]);
  const [borrowFund, setBorrowFund] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const data = [
    { user: "bsaheed79@gmail", status: "Paid", amountBorrow: 50.25, id: 1 },
    { user: "bsaheed79@gmail", status: "Paid", amountBorrow: 50.25, id: 2 },
    { user: "bsaheed79@gmail", status: "Paid", amountBorrow: 50.25, id: 3 },
  ];
  const logout_user = async () => {
    console.log("click");
    try {
      const user_detail = await axios.post(log_out, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user").slice(1, -1)}`,
        },
      });
      router.push("/");
      localStorage.removeItem("user");
    } catch (error) {
      router.push("/");
      localStorage.removeItem("user");
      console.log(error);
    }
  };
  const getAllFundRequest = async () => {
    try {
      const token = `Bearer ${localStorage.getItem("token")}`;
      const Url = `${process.env.NEXT_PUBLIC_BaseUrl}api/peerlend/all/fundrequest`;
      const responseInfo = await fetchData(Url, token);
      setFundRequest(responseInfo);
      console.log("Get all fund request!");
      console.log(responseInfo);
    } catch (error) {
      // alert(error.response.data.errorMessages[0]);
    }
  };
  const getAllBorrowedFund = async () => {
    try {
      const token = `Bearer ${localStorage.getItem("token")}`;
      const Url = `${process.env.NEXT_PUBLIC_BaseUrl}api/peerlend/all/borrowfund`;
      const responseInfo = await fetchData(Url, token);
      setBorrowFund(responseInfo);
      console.log("Get all borrowed fund!");
      console.log(responseInfo);
    } catch (error) {
      // alert(error.response.data.errorMessages[0]);
    }
  };
  const getAllUsers = async () => {
    try {
      const token = `Bearer ${localStorage.getItem("token")}`;
      const Url = `${process.env.NEXT_PUBLIC_BaseUrl}api/peerlend/alluser`;
      const responseInfo = await fetchData(Url, token);
      setAllUsers(responseInfo);
      console.log("Get all users");
      console.log(responseInfo);
    } catch (error) {
      // alert(error.response.data.errorMessages[0]);
    }
  };

  useEffect(() => {
    getAllFundRequest();
    getAllBorrowedFund();
    getAllUsers();
  }, []);

  return (
    <DashboardLayout>
      <section className="mt-4 mb-10">
        <h1 className="text-3xl font-bold text-mainc">Request Fund</h1>
        <div>
          <RequestFund />
        </div>
      </section>
      <section className="mt-4">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold text-mainc">All Users</h1>
            <DataTableAllUsers data={allUsers} />
            {/* <DataTableBorrow data={borrowFund} /> */}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-mainc">Borrowed Nasa</h1>
            <DataTableBorrow data={data} />
            {/* <DataTableBorrow data={borrowFund} /> */}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-mainc">Recover Nasa</h1>
            <DataTableDebt data={data} />
            {/* <DataTableDebt data={fundRequest} /> */}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Lend_nasa_token;
