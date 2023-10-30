import BookRide from "@/components/atom/BookRide";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DataTable from "@/components/organism/DataTable";
import React, { useState } from "react";

const Dashboard = () => {
  const [price, setprice] = useState("");
  const data = [
    { pickup: "Lagos", destination: "Abuja", amountSpent: 50.25 },
    { pickup: "Ondo", destination: "kano", amountSpent: 75.5 },
    { pickup: "Lagos", destination: "Ibadan", amountSpent: 30.75 },
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
          <DataTable data={data} />
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;
