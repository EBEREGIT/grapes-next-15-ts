"use client";

import Link from "next/link";
import React from "react";

export default function LinkComponent({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link href={href} className="border rounded py-2 px-5">
      {label}
    </Link>
  );
}
