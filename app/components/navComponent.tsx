"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NavLink from "./smaller/navLink";
import { Session } from "next-auth";

type Props = {
  session: Session | null;
};
export default function NavComponent({ session }: Props) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenNav((prevValue) => !prevValue)}
        aria-expanded={openNav}
        className="text-3xl text-white lg:hidden"
      >
        <FontAwesomeIcon icon={openNav ? faXmark : faBars}></FontAwesomeIcon>
      </button>

      <nav
        data-open-nav={openNav}
        className="absolute top-[15%] left-0 bg-thirdColorGreen w-full text-center transition-all duration-500 data-[open-nav='false']:scale-0 data-[open-nav='false']:transition-all data-[open-nav='false']:duration-200 data-[open-nav='false']:origin-custom90and0 data-[open-nav='true']:scale-100 lg:static lg:data-[open-nav='false']:scale-100"
      >
        <ul className="flex flex-col items-center lg:w-[42%] lg:flex-row lg:gap-4 lg:ml-auto lg:justify-end">
          <li>
            <NavLink text="Home" link="/"></NavLink>
          </li>
          <li>
            <NavLink text="My todo list" link="/my-todolist"></NavLink>
          </li>
          {session === null ? (
            <>
              <li>
                <NavLink text="Sign in or Sign up" link="/sign-in"></NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink text="Account" link="/account"></NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
