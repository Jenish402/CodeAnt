import React, { useState } from "react";
import onlyLogo from "../assets/images/onlyLogo.jpg";
import vectorIcon from "../assets/images/Vector.svg";
import { IoMdArrowRoundUp } from "react-icons/io";
import lightimage from "../assets/images/lightLogo.jpg";
import Logo from "../assets/images/logo.jpg";
import github from "../assets/images/github.svg";
import bitbucket from "../assets/images/bitbucket.svg";
import devops from "../assets/images/devops.svg";
import gitlab from "../assets/images/gitlab.svg";
import sso from "../assets/images/sso.svg";
import { Link } from "react-router-dom";
import { IoInformationCircleSharp } from "react-icons/io5";

function LoginPage() {
  const [loginPage, setLoginPage] = useState("SAAS");

  return (
    <>
      <div className="login-container flex items-center justify-center min-h-screen w-full font-inter">
        <img
          className="w-[150px] 2xl:w-[284px] xl:w-[250px] lg:w-[200px] absolute bottom-0 left-0 z-[-1]"
          src={lightimage}
          alt=""
        />
        <div className="login-sub-main-container flex flex-row items-center w-full min-h-screen">
          <div className="left-side w-[50%] max-lg:w-full max-md:hidden flex items-center justify-center border-r p-4 h-screen">
            <div className="login-left-container relative flex flex-col items-start  justify-center gap-y-[35px] border p-[24px] rounded-[24px] shadow-custom1 bg-white w-[500px] max-lg:w-[350px]">
              <div className="flex items-center gap-x-[10px] text-base">
                <span>
                  <img
                    className="w-[28px] max-xl:w-[25px]"
                    src={onlyLogo}
                    alt=""
                  />
                </span>
                <span className="font-bold">AI to Detect & Autofix Bad Code</span>
              </div>
              <hr className="absolute h-[1px] w-full left-0 top-[45%]" />
              <div className="w-full">
                <ul className="flex justify-around text-center text-[#081735]">
                  <li className="flex flex-col items-center">
                    <p className="text-base font-bold text-[18px] max-xl:text-sm">30K</p>
                    <p className=" font-normal max-xl:text-xs">Language Support</p>
                  </li>
                  <li className="flex flex-col items-center">
                    <p className="text-base font-bold text-[18px] max-xl:text-sm">10K</p>
                    <p className="font-normal max-xl:text-xs">Developers</p>
                  </li>
                  <li className="flex flex-col items-center">
                    <p className="text-base font-bold text-[18px] max-xl:text-sm">100K</p>
                    <p className="font-normal max-xl:text-xs">Hours Saved</p>
                  </li>
                </ul>
              </div>
              <div className="login-right-container w-[265px] flex flex-col gap-y-[20px] shadow-custom1 py-[15px] px-[32px] rounded-[24px] bg-white absolute top-[85%] max-lg:top-[75%] right-[-30px] max-xl:scale-75">
                <div className="flex items-center justify-between">
                  <div className="bg-[#9D90FA40] rounded-full">
                    <img
                      className="p-[15px] w-[60px]"
                      src={vectorIcon}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="flex items-start">
                      <IoMdArrowRoundUp className="text-[15px] text-[#0049C6] mt-[3px]" />
                      <div>
                      <p className="text-[14px] text-[#0049C6] font-bold">14%</p>
                      <p className="text-[12px] font-normal">This Week</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[#081735]">
                  <p className="text-base  font-bold">Issues Fixed</p>
                  <p className="text-[32px] font-bold">500K+</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-side w-[50%] max-lg:w-full flex flex-col gap-y-[20px] items-center justify-center p-4 bg-[#FAFAFA] h-screen">
            <div className="flex flex-col items-center py-[36px] px-[24px] max-lg:py-6 max-lg:px-4 rounded-[16px] shadow-custom border w-full max-w-[700px] bg-white h-[602px]">
              <div className="flex flex-col items-center gap-y-[20px] w-full">
                <img className="w-[200px] max-lg:w-[150px]" src={Logo} alt="" />
                <p className="text-[32px] max-lg:text-2xl text-center text-nowrap font-semibold">
                  Welcome to CodeAnt AI
                </p>
                <div className="flex flex-row w-full max-sm:flex-row bg-[#FAFAFA] rounded-[8px] border">
                  <button
                    onClick={()=>setLoginPage("SAAS")}
                    className={`w-full rounded-[8px] font-semibold ${
                      loginPage == "SAAS" ? "bg-[#1570EF] text-white" : "bg-[#FAFAFA] text-[#414651]"
                    } px-[16px] py-[14px] max-lg:px-4 max-lg:py-3 text-[#414651]`}
                  >
                    SAAS
                  </button>
                  <button
                    onClick={()=>setLoginPage("SelfHosted")}
                    className={`w-full rounded-[8px] font-semibold  ${
                      loginPage == "SelfHosted"
                        ? "bg-[#1570EF] text-white"
                        : "bg-[#FAFAFA] text-[#414651]"
                    } px-[16px] py-[14px] max-lg:px-4 max-lg:py-3`}
                  >
                    Self Hosted
                  </button>
                </div>
              </div>

              {loginPage === "SAAS" ? (
                <div className="flex flex-col items-center justify-center p-[24px] max-lg:p-4 gap-y-[16px] w-full">
                  <Link
                    to={"/home"}
                    className="flex flex-col gap-y-[16px] w-full"
                  >
                    {[
                      {
                        icon: <img src={github} alt="" />,
                        text: "Sign in with Github",
                      },
                      {
                        icon: <img src={bitbucket} alt="" />,
                        text: "Sign in with Bitbucket",
                      },
                      {
                        icon: <img src={devops} alt="" />,
                        text: "Sign in with Azure Devops",
                      },
                      {
                        icon: <img src={gitlab} alt="" />,
                        text: "Sign in with GitLab",
                      },
                    ].map((btn, index) => (
                      <button
                        key={index}
                        className="flex items-center justify-center gap-x-[12px] border py-[16px] px-[100px] max-lg:py-3 max-lg:px-4 rounded-[8px] w-full text-base max-lg:text-sm"
                      >
                        {btn.icon}
                        <span className="text-nowrap font-semibold text-[16px]">{btn.text}</span>
                      </button>
                    ))}
                  </Link>
                  <p className="w-full text-start text-[#525252] mt-[-10px] flex gap-x-[5px] items-center ">
                    <span>
                      <IoInformationCircleSharp className="text-[18px]" />
                    </span>
                    <span className="max-vs:text-[12px]">Click on any button to continue on next page.</span>
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-[24px] max-lg:p-4 gap-y-[16px] w-full">
                  <Link
                    to={"/home"}
                    className="flex flex-col gap-y-[16px] w-full"
                  >
                    {[
                      {
                        icon: <img src={gitlab} alt="" />,
                        text: "Self hosted GitLab",
                      },
                      {
                        icon: <img src={sso} alt="" />,
                        text: "Sign in with SSO",
                      },
                    ].map((btn, index) => (
                      <button
                        key={index}
                        className="flex items-center justify-center gap-x-[12px] border py-[16px] px-[100px] max-lg:py-3 max-lg:px-4 rounded-[8px] w-full text-base max-lg:text-sm"
                      >
                        {btn.icon}
                        <span className="text-nowrap font-semibold text-[16px]">{btn.text}</span>
                      </button>
                    ))}
                  </Link>
                  <p className="w-full text-start text-[15px] text-[#525252] mt-[-10px] flex gap-x-[5px] items-center">
                    <span>
                      <IoInformationCircleSharp className="text-[18px]" />
                    </span>
                    <span>Click on any button to continue on next page.</span>
                  </p>
                </div>
              )}
            </div>
            <p className="text-base text-[16px] max-lg:text-sm text-center">
              By signing up you agree to the <b> Privacy Policy.</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;