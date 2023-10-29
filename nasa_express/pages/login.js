import InputFeid from "@/components/atom/InputFeid";
import LoginView from "@/components/body/LoginView";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  return (
    <section style={{ width: "100vw", height: "100vh" }}>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className="bg-white rounded-3xl"
          style={{ width: "80%", height: "90%" }}
        >
          <div className="pl-8">
            <div className="flex">
              <div className="flex flex-col gap-2 w-1/2 py-2 pr-8">
                <div className="flex justify-between items-center">
                  <Link href={"/"}>
                    <Image
                      src="/images/pinklogo.png"
                      alt="logo"
                      className="cursor-pointer"
                      width={150}
                      height={100}
                    />
                  </Link>
                  <h2 className="text-2xl font-bold text-mainc">Login</h2>
                </div>
                <div className="flex flex-col gap-4 mt-10">
                  <div>
                    <h2 className="text-2xl font-bold text-blackt">Login</h2>
                    <p>Login to your NASA account</p>
                  </div>
                  <form className="flex flex-col gap-2 mt-2">
                    <div className="flex gap-4 justify-between">
                      <InputFeid
                        title={"Email"}
                        type={"text"}
                        id={"email"}
                        setstate={(e) => setemail(e)}
                      />
                    </div>
                    <div className="flex gap-4 justify between">
                      <InputFeid
                        title={"Password"}
                        type={"password"}
                        id={"password"}
                        setstate={(e) => setpassword(e)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-mainc py-2 mt-2 text-white rounded-2xl hover:text-blackt"
                      id="submitbtn"
                    >
                      Login
                    </button>
                    <p className="text-blackt">
                      Forgot username or password?{" "}
                      <Link href={"/login"} className="text-mainc">
                        Reset
                      </Link>
                    </p>
                  </form>
                  <p>
                    New to NASA express?{" "}
                    <Link href={"/signup"} className="text-mainc">
                      sign up
                    </Link>
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <img
                  src="/images/loginside.png"
                  alt="loginmodel"
                  style={{ width: "100%", height: "100%", maxHeight: "508px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
