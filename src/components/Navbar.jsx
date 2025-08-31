"use client";
import { navLinks } from "@/data/NavLinks";
import { motion } from "framer-motion";
import Link from "next/link";
import UserAuthentication from "@/components/UserAuthentication";
import { useEffect, useRef, useState } from "react";
import { profileIconData } from "@/data/ProifleIconData";
const Navbar = () => {
  const [isAuthenticationOpen, setIsAuthenticationOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
  useEffect(() => {
    const close = (e) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  return (
    <>
      <nav className="px-[1rem] py-[1rem] border-b-[1px] border-gray-500 flex items-center justify-between fixed w-full bg-white/5 backdrop-blur-2xl z-50">
        <Link href={"/"}>
          <div className="flex items-center cursor-pointer">
            <i className="fa-solid fa-arrow-trend-up bg-gradient-to-r from-blue-700 to-pink-700 text-transparent bg-clip-text text-[2rem]"></i>
            <h1 className="px-[1rem] text-[1.5rem] font-semibold">
              ME Analytics
            </h1>
          </div>
        </Link>
        <div className="flex items-center">
          <ul className="flex">
            {navLinks.map((link) => {
              return (
                <li key={link.text}>
                  <Link href={link.link}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className={`px-[1rem] ${
                        link.active ? "text-blue-400" : "text-white"
                      } font-semibold cursor-pointer`}
                    >
                      {link.text}
                    </motion.div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center">
          <div className="mx-[1rem] cursor-pointer">
            <div className="relative">
              <div className="bg-blue-600 absolute rounded-full w-[1rem] h-[1rem] flex justify-center items-center -top-2 -left-2">
                <p>1</p>
              </div>
            </div>
            <i className="fa-solid fa-bell text-[1.2rem]"></i>
          </div>
          <div>
            <div className="border-[1px] border-gray-500 px-[0.5rem] rounded-full py-[0.35rem]">
              <input
                type="text"
                className="outline-none px-[0.5rem]"
                placeholder="Search..."
              />
              <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
            </div>
          </div>
          <div className="flex justify-center items-center mx-[1rem]">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setIsAuthenticationOpen(true);
              }}
              className="bg-blue-600 mx-[1rem] px-[1rem] py-[0.0.25rem] rounded-xl font-semibold cursor-pointer"
            >
              Login
            </motion.button>
            <div className="relative">
              <motion.button
                onClick={() => {
                  setIsProfileMenuOpen(true);
                }}
                whileHover={{ scale: 1.05 }}
                className="rounded-full mx-[1rem] border-[1px] border-gray-500 w-[2rem] h-[2rem] flex justify-center items-center cursor-pointer"
              >
                <i className="fa-solid fa-user text-[1.2rem]"></i>
              </motion.button>
              {isProfileMenuOpen && (
                <div ref={profileMenuRef} className="absolute top-13 right-0">
                  <ul className="w-[20vw] darkBg border-[2px] border-gray-500 rounded-sm shadow-lg">
                    {profileIconData.map((item) => {
                      return (
                        <li
                          key={item.text}
                          className="px-[1rem] py-[0.7rem] border-b-[1px] border-gray-500 cursor-pointer hover:bg-gray-900 hover:rounded-lg"
                        >
                          <i className={`${item.icon} mr-3`}></i>
                          {item.text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {isAuthenticationOpen && (
        <UserAuthentication setIsAuthenticationOpen={setIsAuthenticationOpen} />
      )}
    </>
  );
};

export default Navbar;
