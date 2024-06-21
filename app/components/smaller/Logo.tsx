import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Logo() {
  return (
    <a
      href="/"
      className="bg-firstColorYellow p-4 flex justify-center items-center w-fit text-white text-3xl rounded-[50%] transition-all duration-200 hover:bg-secondColorDarkerYellow"
    >
      <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>
    </a>
  );
}
