import { navDataDash } from "@/dummyData/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DashboardNavItem from "../atom/DashboardNavItem";
import Link from "next/link";
import { fetchData } from "@/utils/ApiCall";

const DashboardLayout = ({ children }) => {
  const [User, setUser] = useState();
  useEffect(() => {
    const fetcUserDetails = async () => {
      const token = `Bearer ${localStorage.getItem("token")}`;
      const Url = `${process.env.NEXT_PUBLIC_BaseUrl}api/user/auth/me/info`;
      try {
        const getData = await fetchData(Url, token);
        setUser(getData);
        localStorage.setItem("clientid", getData.id);
        console.log(getData);
      } catch (e) {
        console.log(e);
      }
    };
    fetcUserDetails();
  }, []);
  if (!User) {
    return <p>Loading... </p>;
  }
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
          <Link href={"/"}>
            <button className="bg-white py-2 px-8 text-blackt rounded-2xl">
              Log out
            </button>
          </Link>
        </div>
      </aside>
      <main
        className="w-4/5 mt-12 px-10"
        style={{ height: "100vh", overflowY: "scroll" }}
      >
        <section className="flex justify-between item-center gap-20">
          <h3 className="text-blackt font-bold text-2xl">
            Welcome {User.firstName} {User.lastName}
          </h3>
          <h3 className="text-blackt font-bold text-2xl">
            Nasa Token Balance: {User.wallet.balance}
          </h3>
        </section>
        <div>{children}</div>
      </main>
    </section>
  );
};

export default DashboardLayout;
