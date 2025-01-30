"use client";

import { useSearchParams } from "next/navigation";

export default function PreviewComponent() {
  const searchParams = useSearchParams();

  const projectID = searchParams.get("projectID");

  const parsed = JSON.parse(
    localStorage.getItem(`${projectID}-published`) as string
  );

  return (
    <>
      {parsed ? (
        <main dangerouslySetInnerHTML={{ __html: parsed.html }} />
      ) : (
        "Please Click the Save icon to publish"
      )}
    </>
  );
}
