"use client";
import Link from "next/link";
import { ReactNode } from "react";

type props = {
  text?: string;
  classNameExtra?: string;
  buttonType: "submit" | "reset" | "button" | undefined;
  possibleIcon?: ReactNode;
  onClickFunction?: Function;
};

export default function ButtonYellow({
  text,
  classNameExtra,
  buttonType,
  possibleIcon,
  onClickFunction,
}: props) {
  return (
    <div
      className={`${classNameExtra} inline-block bg-firstColorYellow p-2 my-2 text-white text-xl font-semibold cursor-pointer transition-all duration-200 hover:bg-secondColorDarkerYellow`}
      onClick={() => {
        if (onClickFunction) {
          onClickFunction();
        }
      }}
    >
      <button type={buttonType}>
        {possibleIcon}
        {text}
      </button>
    </div>
  );
}
