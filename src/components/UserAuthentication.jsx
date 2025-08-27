"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UserAuthentication = ({ setIsAuthenticationOpen }) => {
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const authRef = useRef(null);
  useEffect(() => {
    const Close = (e) => {
      if (authRef.current && !authRef.current.contains(e.target)) {
        setIsAuthenticationOpen(false);
      }
    };
    document.addEventListener("mousedown", Close);
    return () => {
      document.removeEventListener("mousedown", Close);
    };
  }, []);
  return (
    <div className="absolute w-[100vw] h-[100vh] bg-white/5 backdrop-blur-2xl z-50 flex justify-center items-center ">
      <div
        className="darkBg flex w-[60vw]  p-[1rem] rounded-lg shadow-lg z-50"
        ref={authRef}
      >
        <AnimatePresence mode="wait">
          {isLoginOpen ? (
            <motion.div
              key={"loginForm"}
              initial={{ opacity: 0, x: isLoginOpen ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLoginOpen ? 50 : -50 }}
              transition={{ duration: 0.5 }}
              className="w-1/2 px-[1rem] border-r-[1px] border-gray-500 darkBg"
            >
              <h1 className="text-[1.5rem] font-semibold text-center mb-[1rem]">
                Login
              </h1>
              <form action="" className="flex flex-col">
                <input
                  type="email"
                  className="outline-none border-[1px] border-gray-500 rounded-lg px-[0.5rem] py-[0.5rem] my-[0.5rem] focus:border-blue-300"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="outline-none border-[1px] border-gray-500 rounded-lg px-[0.5rem] py-[0.5rem] my-[0.5rem] focus:border-blue-300"
                  placeholder="Password"
                />
                <button className="bg-gradient-to-r from-blue-600 to-pink-600 my-[1rem] rounded-lg py-[0.5rem] cursor-pointer">
                  Login
                </button>
                <p className="text-[0.9rem] text-center">
                  Don't have an account?{" "}
                  <button
                    className="font-semibold text-blue-600 cursor-pointer "
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLoginOpen(false);
                    }}
                  >
                    SignUp
                  </button>
                </p>
                <p className="text-[0.9rem] text-blue-600 text-center cursor-pointer">
                  Forgotten password
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="loginButton"
              initial={{ opacity: 0, x: isLoginOpen ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLoginOpen ? -50 : 50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center w-1/2 px-[1rem] border-r-[1px] border-gray-500 darkBg"
            >
              <div className="flex items-center cursor-pointer mb-[1.5rem]">
                <i className="fa-solid fa-arrow-trend-up bg-gradient-to-r from-blue-700 to-pink-700 text-transparent bg-clip-text text-[2rem]"></i>
                <h1 className="px-[1rem] text-[1.5rem] font-semibold">
                  ME Analytics
                </h1>
              </div>
              <p>Hi, If you have an account?</p>
              <div>
                <button
                  className="bg-gradient-to-r from-blue-600 to-pink-600 my-[1rem] rounded-lg py-[0.5rem] px-[1rem] cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLoginOpen(true);
                  }}
                >
                  LogIn
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {isLoginOpen ? (
            <motion.div
              key={"signupButton"}
              initial={{ opacity: 0, x: isLoginOpen ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLoginOpen ? -50 : 50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center w-1/2 darkBg"
            >
              <div className="flex items-center cursor-pointer mb-[1.5rem]">
                <i className="fa-solid fa-arrow-trend-up bg-gradient-to-r from-blue-700 to-pink-700 text-transparent bg-clip-text text-[2rem]"></i>
                <h1 className="px-[1rem] text-[1.5rem] font-semibold">
                  ME Analytics
                </h1>
              </div>
              <p>Hi, If you don't have an account?</p>
              <div>
                <button
                  className="bg-gradient-to-r from-blue-600 to-pink-600 my-[1rem] rounded-lg py-[0.5rem] px-[1rem] cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLoginOpen(false);
                  }}
                >
                  SignUp
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={"signupForm"}
              initial={{ opacity: 0, x: isLoginOpen ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLoginOpen ? 50 : -50 }}
              transition={{ duration: 0.5 }}
              className="w-1/2 px-[1rem] darkBg"
            >
              <h1 className="text-[1.5rem] font-semibold text-center mb-[1rem]">
                SignUp
              </h1>
              <form action="" className="flex flex-col">
                <div className="flex justify-between">
                  <input
                    type="email"
                    className="outline-none border-[1px] border-gray-500 rounded-lg px-[0.5rem] py-[0.5rem] my-[0.5rem] focus:border-blue-300"
                    placeholder="First Name"
                  />{" "}
                  <input
                    type="email"
                    className="outline-none border-[1px] border-gray-500 rounded-lg px-[0.5rem] py-[0.5rem] my-[0.5rem] focus:border-blue-300"
                    placeholder="LastName"
                  />
                </div>
                <div
                  className={`flex border-[1px]  rounded-lg my-[0.5rem] ${
                    isEmailFocus ? " border-blue-300" : "border-gray-500"
                  }`}
                >
                  <input
                    type="email"
                    onFocus={() => {
                      setIsEmailFocus(true);
                    }}
                    onBlur={() => {
                      setIsEmailFocus(false);
                    }}
                    className="outline-none  px-[0.5rem] py-[0.5rem] w-full  "
                    placeholder="Email"
                  />
                  <button className="bg-green-600 px-[1rem] rounded-r-lg cursor-pointer">
                    Verify
                  </button>
                </div>
                <input
                  type="password"
                  className="outline-none border-[1px] border-gray-500 rounded-lg px-[0.5rem] py-[0.5rem] my-[0.5rem] focus:border-blue-300"
                  placeholder="Password"
                />
                <input
                  type="password"
                  className="outline-none border-[1px] border-gray-500 rounded-lg px-[0.5rem] py-[0.5rem] my-[0.5rem] focus:border-blue-300"
                  placeholder="Confirm Password"
                />
                <button className="bg-gradient-to-r from-blue-600 to-pink-600 my-[1rem] rounded-lg py-[0.5rem] cursor-pointer">
                  SignUp
                </button>
                <p className="text-[0.9rem] text-center mb-[1rem]">
                  Already have an account?{" "}
                  <button
                    className="font-semibold text-blue-600 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLoginOpen(true);
                    }}
                  >
                    Login
                  </button>
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UserAuthentication;
