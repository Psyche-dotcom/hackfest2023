import { navDataDash } from "@/dummyData/data";
import Image from "next/image";
import React from "react";
import DashboardNavItem from "../atom/DashboardNavItem";
import Link from "next/link";

const DashboardLayout = ({ children, logout, balance, name }) => {
  return (
    <section
      className="flex"
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      <aside className="w-1/5 bg-mainc" style={{ height: "100vh" }}>
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="logo"
            className="cursor-pointer mt-12"
            width={150}
            height={100}
          />
        </Link>
        <div className="flex flex-col gap-6 mt-6   py-10">
          {navDataDash.map(({ title, id, link }) => (
            <>
              <DashboardNavItem key={id} title={title} link={link} />
            </>
          ))}
        </div>
        <div className="flex  justify-center">
          <button
            className="bg-white py-2 px-8 text-blackt rounded-2xl"
            onClick={logout}
          >
            Log out
          </button>
        </div>
      </aside>
      <main className="w-4/5 mt-12 px-10" style={{ height: "100vh" }}>
        <section className="flex justify-between item-center gap-20">
          <h3 className="text-blackt font-bold text-2xl">Welcome {name}</h3>
          <h3 className="text-blackt font-bold text-2xl">
            Nasa Token Balance: {balance}
          </h3>
        </section>
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
