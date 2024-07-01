"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { useFormStatus } from "react-dom";

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
  const status = useFormStatus();
  const router = useRouter();

  return (
    <button
      className={`${classNameExtra} inline-block bg-firstColorYellow p-2 my-2 text-white text-xl font-semibold cursor-pointer transition-all duration-200 hover:bg-secondColorDarkerYellow disabled:bg-gray-500 disabled:cursor-auto`}
      disabled={status.pending}
      onClick={async (e) => {
        if (onClickFunction) {
          onClickFunction();
        }
      }}
      type={buttonType}
    >
      {possibleIcon}
      {text}
    </button>
  );
}
