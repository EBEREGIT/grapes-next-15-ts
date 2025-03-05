import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

// construct the temporary path to the uploads directory
const uploadDir = path.join(process.cwd(), "uploads");

export async function POST(req: NextRequest) {
  return new Promise((resolve) => {
    // create a new formidable form instance
    const form = new formidable.IncomingForm({
      uploadDir,
      keepExtensions: true,
    });

    // parse the incoming request
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form.parse(req as any, (err, fields, files) => {
      // handle any errors that may occur during the file upload
      if (err) {
        resolve(
          NextResponse.json({ error: "Failed to upload file" }, { status: 500 })
        );
        return;
      }

      // get the file from the files object
      const file = files.file as unknown as formidable.File;

      //   construct the destination folder and path
      const destinationFolder = path.join(process.cwd(), "assets");

      //   construct the destination file name
      const destinationPath = path.join(destinationFolder, file.newFilename);

      //   move the file to the destination folder from the temporary uploads directory
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
