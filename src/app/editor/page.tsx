import React from "react";
import EditorView from "./components/editor";
import Navigation from "@/components/general/nav";

export default function Editor() {
  return (
    <main className="p-5">
      <Navigation />
      <EditorView />
    </main>
  );
}
