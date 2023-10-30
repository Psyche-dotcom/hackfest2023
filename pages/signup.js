import InputFeid from "@/components/atom/InputFeid";
import { postDataAuth } from "@/utils/ApiCall";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Register = () => {
  const [client, setclient] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [lincenseno, setlincenseno] = useState("");
  const [lincensedate, setlincensedate] = useState("");
  const [password, setpassword] = useState("");
  const [comfirmpassword, setcomfirmpassword] = useState("");
  const [ErrorState, setErrorState] = useState(false);
  const [Error, setError] = useState("");
  const router = useRouter();
  const SubmitSignUp = async () => {
    const url = `${process.env.NEXT_PUBLIC_BaseUrl}api/user/auth/register`;
    var data = {
      firstName: firstname,
      lastName: lastname,
      userName: email,
      email: email,
      phoneNumber: phone,
      driverLicence: lincenseno || "R0456545",
      driverLicenceExpiryDate: lincensedate || new Date(),
      role: client ? "Rider" : "User",
      password: password,
      confirmPassword: comfirmpassword,
    };
    try {
      var setup = await postDataAuth(url, data, "");
      if (setup.statusCode === 200) {
        const url = `${process.env.NEXT_PUBLIC_BaseUrl}api/user/auth/login`;
        var data = {
          email: email,
          password: password,
        };
        var login = await postDataAuth(url, data, "");
        if (login.statusCode === 200) {
          localStorage.setItem("token", login.result.jwt);
          router.push("/dashboard");
        }
      }
    } catch (error) {
      var errorMessage = error.response.data.errorMessages;
      console.log(error);
      setError(errorMessage[0]);
      setErrorState(true);
    }
  };

  return (
    <section className="bg-mainc" style={{ width: "100vw", height: "100vh" }}>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className="bg-white rounded-3xl"
          style={{ width: "80%", height: "90%" }}
        >
          <div className="px-8 py-4">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-black">Create Account</h2>
              <div className=" flex self-center">
                <button
                  onClick={() => setclient(false)}
                  className={`border border-hovc rounded-l-lg px-2 py-1 text-sm ${
                    client ? "" : "bg-mainc text-white"
                  } `}
                >
                  User
                </button>
                <button
                  onClick={() => setclient(true)}
                  className={`border border-cardBg rounded-r-lg px-2 py-1 text-sm ${
                    !client ? "" : "bg-mainc text-white"
                  }`}
                >
                  Nasa Rider
                </button>
              </div>
              <Link href={"/"}>
                <Image
                  src="/images/pinklogo.png"
                  alt="logo"
                  className="cursor-pointer"
                  width={150}
                  height={100}
                />
              </Link>
            </div>
            <form className="flex flex-col gap-4 mt-4">
              <div className="flex gap-4 justify-between">
                <InputFeid
                  title={"First Name"}
                  type={"text"}
                  id={"fname"}
                  setstate={(e) => setfirstname(e)}
                />
                <InputFeid
                  title={"Last Name"}
                  type={"text"}
                  id={"lname"}
                  setstate={(e) => setlastname(e)}
                />
              </div>
              <div className="flex gap-4 justify-between">
                <InputFeid
                  title={"Email"}
                  type={"email"}
                  id={"email"}
                  setstate={(e) => setemail(e)}
                />
                <InputFeid
                  title={"Phone Number"}
                  type={"number"}
                  id={"pnum"}
                  setstate={(e) => setphone(e)}
                />
              </div>

              {client && (
                <div className="flex gap-4 justify-between">
                  <InputFeid
                    title={"Driver's Lincense no"}
                    type={"text"}
                    id={"lincense"}
                    setstate={(e) => setlincenseno(e)}
                  />
                  <InputFeid
                    title={"Expiration Date"}
                    type={"date"}
                    id={"expiryDate"}
                    setstate={(e) => setlincensedate(e)}
                  />
                </div>
              )}
              <div className="flex gap-4 justify-between">
                <InputFeid
                  title={"Password"}
                  type={"password"}
                  id={"password"}
                  setstate={(e) => setpassword(e)}
                />
                <InputFeid
                  title={"Confirm Password"}
                  type={"password"}
                  id={"conpassword"}
                  setstate={(e) => setcomfirmpassword(e)}
                />
              </div>
              <button
                type="button"
                onClick={SubmitSignUp}
                className="bg-mainc py-2 mt-2 text-white rounded-2xl hover:text-blackt"
                id="submitbtn"
              >
                Create Account
              </button>
              <p className="text-blackt">
                Already have an account?{" "}
                <Link href={"/login"} className="text-mainc">
                  {" "}
                  Login
                </Link>
              </p>
              {ErrorState && <p className="text-red-500">{Error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
