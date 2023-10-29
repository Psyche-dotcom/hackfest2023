import RequestFund from "@/components/atom/RequestFund";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DataTableBorrow from "@/components/organism/DataTableBorrow";
import DataTableDebt from "@/components/organism/DataTableDebt";
import React from "react";

const Lend_nasa_token = () => {
  const data = [
    { user: "bsaheed79@gmail", status: "Paid", amountBorrow: 50.25 },
    { user: "bsaheed79@gmail", status: "Paid", amountBorrow: 50.25 },
    { user: "bsaheed79@gmail", status: "Paid", amountBorrow: 50.25 },
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
        <h1 className="text-3xl font-bold text-mainc">Request Fund</h1>
        <div>
          <RequestFund />
        </div>
      </section>
      <section className="mt-4">
        <div className="flex gap-4">
          <div>
            <h1 className="text-3xl font-bold text-mainc">Borrowed Nasa</h1>
            <DataTableBorrow data={data} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-mainc">Recover Nasa</h1>
            <DataTableDebt data={data} />
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Lend_nasa_token;
