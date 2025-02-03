/* eslint-disable @typescript-eslint/no-explicit-any */
import Btn from "@/components/general/btn";
import React, { Dispatch, SetStateAction } from "react";

export default function PreviewNav({
  setCurrentFile,
  files,
}: {
  files: any[];
  setCurrentFile: Dispatch<SetStateAction<string>>;
}) {
  return (
    <nav className="p-5 gap-5 flex justify-center border-y-2 sticky top-10 bg-white">
      {files.map(
        (file) =>
          file.filename.split(".")[1] === "html" && (
            <Btn
              handleClick={() => setCurrentFile(file.content)}
              label={file?.filename}
              key={file?.filename}
              color={"green"}
            />
          )
      )}
    </nav>
  );
}
