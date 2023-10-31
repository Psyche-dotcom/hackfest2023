import PurchaseNasa from "@/components/atom/PurchaseNasa";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DataTableNasaTransaction from "@/components/organism/DataTableNasaTransaction";
import React from "react";

const Buy_nasa = () => {
  const data = [
    { type: "Debit", narration: "Deposit from Stripe", amount: 50.25 },
    { type: "Debit", narration: "Deposit from Stripe", amount: 50.25 },
    { type: "Debit", narration: "Deposit from Stripe", amount: 50.25 },
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
    <DashboardLayout
      name={"Saheed Babatunde"}
      balance={2000}
      logout={logout_user}
    >
      <section className="mt-4">
        <h1 className="text-3xl font-bold text-mainc">Buy Nasa</h1>
        <div>
          <p className="text-center">$1 == 50 nasa</p>
          <PurchaseNasa />
        </div>
      </section>
      <section className="mt-4">
        <div>
          <div>
            <h1 className="text-3xl font-bold text-mainc">Nasa Transaction</h1>
            <DataTableNasaTransaction data={data} />
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Buy_nasa;
