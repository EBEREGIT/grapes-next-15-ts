"use client";

import React from "react";
import LinkComponent from "./link";
import { useSearchParams } from "next/navigation";

export default function Navigation() {
  const searchParams = useSearchParams();
  const projectID = searchParams.get("projectID");
  const projectTitle = searchParams.get("projectTitle");

  return (
    <div className="flex gap-5 justify-between mb-5 sticky top-5 bg-white">
      {/* brand */}
      <div className="font-bold">Studio SDK Next.js Tutorial</div>

      {/* project title */}
      <h2>{projectTitle}</h2>

      {/* links */}
      <section className="gap-5 flex">
        <LinkComponent href={"/"} label={"Projects"} />
        <LinkComponent
          href={`/preview?projectID=${projectID}&projectTitle=${projectTitle}`}
          label="Preview"
        />
      </section>
    </div>
  );
}
