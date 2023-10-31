import BookRide from "@/components/atom/BookRide";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DataTable from "@/components/organism/DataTable";
import { fetchData } from "@/utils/ApiCall";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [price, setprice] = useState("");
  const [getAllTrips, setGetAllTrips] = useState([]);

  const getAllUserTrip = async () => {
    try {
      const token = `Bearer ${localStorage.getItem("token")}`;
      const Url = `${process.env.NEXT_PUBLIC_BaseUrl}api/book/getalltrip`;
      const responseInfo = await fetchData(Url, token);
      setGetAllTrips(responseInfo);
    } catch (error) {
      // alert(error.response.data.errorMessages[0]);
    }
  };

  useEffect(() => {
    getAllUserTrip();
  }, []);

  return (
    <DashboardLayout>
      <section className="mt-4">
        <h1 className="text-3xl font-bold text-mainc">Book Ride</h1>
        <div>
          <BookRide />
        </div>
      </section>
      <section className="mt-4">
        <h1 className="text-3xl font-bold text-mainc">Ride Taken</h1>
        <div>
          <DataTable data={getAllTrips} />
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;
