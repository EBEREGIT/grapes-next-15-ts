"use client";

import React from "react";
import LinkComponent from "./link";
import { useSearchParams } from "next/navigation";

export default function Navigation() {
  const searchParams = useSearchParams();
  const projectID = searchParams.get("projectID");
  const projectTitle = searchParams.get("projectTitle");

  return (
    <div className="flex gap-5 justify-between mb-5">
      <div className="font-bold">SDK Next.js Tutorial</div>

      <h2>{projectTitle}</h2>

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
