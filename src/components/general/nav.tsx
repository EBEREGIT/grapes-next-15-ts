import React from "react";
import LinkComponent from "./link";

export default function Navigation() {
  return (
    <div className="flex gap-5">
      <div className="font-bold">SDK Next.js Tutorial</div>
      <LinkComponent href={"/"} label={"Projects"} />
      <LinkComponent
        href={"/published-projects"}
        label={"Published Projects"}
      />
    </div>
  );
}
