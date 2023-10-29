import DashboardLayout from "@/components/layout/DashboardLayout";
import React from "react";

const Dashboard = () => {
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
    <DashboardLayout trip={20} balance={2000} logout={logout_user}>
      <section>Dashboard</section>
    </DashboardLayout>
  );
};

export default Dashboard;
