"use client";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormStatus } from "react-dom";

type Props = {
  conditionChecked: boolean;
};

export default function ButtonCheck({ conditionChecked }: Props) {
  const status = useFormStatus();

  return (
    <button
      className={`border-gray-300 border-solid border-2 py-[0.1em] px-[0.25em] transition-all duration-100 disabled:bg-black disabled:cursor-auto hover:border-[#a19108] ${
        conditionChecked ? "bg-blue-500" : "bg-white"
      }`}
      disabled={status.pending}
      type="submit"
    >
      {conditionChecked ? (
        <FontAwesomeIcon
          className="text-white text-xl"
          icon={faCheck}
        ></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon
          className="text-white opacity-0 text-xl"
          icon={faCheck}
        ></FontAwesomeIcon>
      )}
    </button>
  );
}
