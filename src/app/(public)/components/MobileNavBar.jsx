"use client";
import React, { useState } from "react";
import bars from "@/assets/bars-3.png";
import x from "@/assets/x-mark.png";
import Image from "next/image";
import { NAV_DATA } from "../(home)/static/navData";
import Link from "next/link";

const MobileNavBar = () => {
  const [showMenu, isShowMenu] = useState(false);

  return (
    <div>
      <Image
        src={showMenu ? x : bars}
        alt="menu"
        onClick={() => isShowMenu(!showMenu)}
      />

      <div className="absolute right-0 w-full py-9 z-[999999]">
        <ul
          className={`bg-red-700 flex flex-col items-start gap-6 pt-10 pb-12 px-4 ${
            showMenu
              ? "translate-x-0 duration-700"
              : "-translate-x-[1000px] duration-1000"
          }`}
        >
          {NAV_DATA.map((nav) => (
            <li key={nav.id} className="text-white px-5 py-2.5">
              {" "}
              <Link href={nav.href}> {nav.title} </Link>{" "}
            </li>
          ))}
          <li key={12} className="text-white px-5 py-2.5">
              {" "}
              <Link href="/"> Report a Claim </Link>{" "}
            </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavBar;
