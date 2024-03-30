import Image from "next/image";
import React from "react";
import Link from "next/link";
import { NAV_DATA } from "../(home)/static/navData";

const TheHeader = () => {
  return (
    <div className="flex justify-between border-b border-b-gray-200 py-5 container">
      <div>
       <Link href="/"> <Image
          src="/logo.png"
          alt="logo"
          width={300}
          height={300}
          className="w-20 h-10"
        /></Link>
      </div>

      <div className="flex gap-6">
        {(NAV_DATA ?? [])?.map((nav) => (
          <Link key={nav.id} href={nav.href} className="px-5 py-2.5 font-medium text-gray-900">
            {nav.title}
          </Link>
        ))}

        <button className="px-5 py-2 bg-red-600 text-white rounded-full">Report a Claim</button>
      </div>
    </div>
  );
};

export default TheHeader;
