import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), "uploads");

export async function POST(req: NextRequest) {
  return new Promise((resolve) => {
    const form = new formidable.IncomingForm({
      uploadDir,
      keepExtensions: true,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form.parse(req as any, (err, fields, files) => {
      if (err) {
        resolve(
          NextResponse.json({ error: "Failed to upload file" }, { status: 500 })
        );
        return;
      }

      const file = files.file as unknown as formidable.File;
      const destinationFolder = path.join(process.cwd(), "assets");
      const destinationPath = path.join(destinationFolder, file.newFilename);

      fs.rename(file.filepath, destinationPath, (err) => {
        if (err) {
          resolve(
            NextResponse.json({ error: "Failed to copy file" }, { status: 500 })
          );
          return;
        }

        resolve(
          NextResponse.json(
            { message: "File uploaded and copied successfully" },
            { status: 200 }
          )
        );
      });
    });
  });
}
