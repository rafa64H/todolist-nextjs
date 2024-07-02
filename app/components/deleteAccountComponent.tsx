"use client";

import React, { useState } from "react";
import ButtonYellow from "./smaller/buttonYellow";
import { User } from "next-auth";
import { useRouter } from "next/navigation";

type Props = {
  user: User;
};
export default function DeleteAccountComponent({ user }: Props) {
  const [dialogState, setDialogState] = useState(false);

  const router = useRouter();

  return (
    <>
      <ButtonYellow
        buttonType="button"
        text="Delete account"
        onClickFunction={() => {
          setDialogState(true);
        }}
      ></ButtonYellow>

      <section
        data-hidden={dialogState}
        className="hidden absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-30 p-4 bg-green-950 text-white font-medium data-[hidden='true']:block"
      >
        <h2 className="text-lg text-center">Are you sure?</h2>

        <div className="flex items-center gap-4">
          <form
            action={async () => {
              const id = user.id;
              await fetch("/api/user", {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id,
                }),
              });

              router.push("/");
            }}
          >
            <ButtonYellow buttonType="submit" text="Yes"></ButtonYellow>
          </form>

          <ButtonYellow
            buttonType="button"
            text="No"
            onClickFunction={() => {
              setDialogState(false);
            }}
          ></ButtonYellow>
        </div>
      </section>

      <div
        data-hidden={dialogState}
        className="hidden absolute top-0 left-0 z-20 w-full h-full bg-black opacity-40 data-[hidden='true']:block"
      ></div>
    </>
  );
}
