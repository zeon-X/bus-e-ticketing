import Link from "next/link";
import React from "react";

const NavigationLinks = () => {
  return (
    <>
      <li className="text-[14px]">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="text-[14px]">
        <Link href={"/login"}>Login</Link>
      </li>
      <li className="text-[14px]">
        <Link href={"/register"}>Register</Link>
      </li>
      <li className="text-[14px]">
        <Link href={"/bus-information"}>Bus Information</Link>
      </li>
      <li className="text-[14px]">
        <Link href={"/contact-us"}>Contact Us</Link>
      </li>
    </>
  );
};

export default NavigationLinks;
