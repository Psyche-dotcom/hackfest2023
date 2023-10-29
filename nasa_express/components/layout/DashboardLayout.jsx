import Image from "next/image";
import React from "react";

const DashboardLayout = ({ children, logout, balance, trip }) => {
  return (
    <section className="flex" style={{ width: "100vw", height: "100vh" }}>
      <aside className="w-1/4 bg-mainc" style={{ height: "100vh" }}>
        <Image
          src="/images/logo.png"
          alt="logo"
          className="cursor-pointer mt-12"
          width={150}
          height={100}
        />
        <div className="px-4"></div>
        <div className="flex  justify-center">
          <button className="bg-white py-2 px-8 text-blackt rounded-2xl  ">
            Log out
          </button>
        </div>
      </aside>
      <main className="w3/4 mt-12 px-4" style={{ height: "100vh" }}>
        <section className="flex justify-between item-center gap-14">
          <h3 className="text-blackt font-bold text-2xl">
            Nasa Token Balance: {balance}
          </h3>
          <h3 className="text-blackt font-bold text-2xl">
            Total trip on NasaExpress: {trip}
          </h3>
        </section>
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
