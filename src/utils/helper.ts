// import fs from "fs";
// import path from "path";

// // Function to copy file to another folder
// export const copyFileToFolder = async (
//   file: File,
//   destinationFolder: string
// ) => {
//   const destinationPath = path.join(destinationFolder, file.name);
//   const fileReader = new FileReader();

//   fileReader.onload = () => {
//     const arrayBuffer = fileReader.result as ArrayBuffer;
//     const buffer = Buffer.from(arrayBuffer);
//     fs.writeFileSync(destinationPath, buffer);
//   };

//   fileReader.readAsArrayBuffer(file);
// };
