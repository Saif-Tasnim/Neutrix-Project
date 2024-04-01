"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { NAV_DATA } from "../(home)/static/navData";
import { usePathname } from "next/navigation";
import { MobileNavBar } from ".";

const TheHeader = () => {
  const pathName = usePathname();

  return (
    <div className="flex justify-between border-b border-b-gray-200 py-5 container">
      <div>
        <Link href="/">
          {" "}
          <Image
            src="/logo.png"
            alt="logo"
            width={300}
            height={300}
            className="w-20 h-10"
          />
        </Link>
      </div>

      <div className="hidden lg:flex lg:gap-6 ">
        {(NAV_DATA ?? [])?.map((nav) => (
          <Link
            key={nav.id}
            href={nav.href}
            className={`px-5 py-2.5 font-medium ${
              pathName === nav.href ? "text-red-700" : "text-gray-900"
            }`}
          >
            {nav.title}
          </Link>
        ))}

        <button className="px-5 py-2 bg-red-600 text-gray-100 rounded-full font-medium">
          Report a Claim
        </button>
      </div>

      <div className="block lg:hidden">
        <MobileNavBar />
      </div>
    </div>
  );
};

export default TheHeader;
