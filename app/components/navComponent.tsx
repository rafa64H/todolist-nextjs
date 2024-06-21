"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NavLink from "./smaller/navLink";

export default function NavComponent() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenNav((prevValue) => !prevValue)}
        aria-expanded={openNav}
        className="text-3xl text-white"
      >
        <FontAwesomeIcon icon={openNav ? faXmark : faBars}></FontAwesomeIcon>
      </button>

      <nav
        data-open-nav={openNav}
        className="flex flex-col items-center absolute top-[15%] left-0 bg-thirdColorGreen w-full text-center transition-all duration-500"
      >
        <ul>
          <li>
            <NavLink text="Home" link="/"></NavLink>
          </li>
          <li>
            <NavLink text="My todo list" link="/"></NavLink>
          </li>
          <li>
            <NavLink text="Sign in" link="/"></NavLink>
          </li>
          <li>
            <NavLink text="Sign up" link="/"></NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
