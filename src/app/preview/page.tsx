import React from "react";
import PreviewComponent from "./components/preview";
import Navigation from "@/components/general/nav";

export default function Preview() {
  return (
    <main className="p-5">
      <Navigation />
      <PreviewComponent />
    </main>
  );
}
