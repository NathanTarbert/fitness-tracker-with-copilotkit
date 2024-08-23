import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import formidable, { Files } from "formidable";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parsing to handle file uploads with formidable
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm();

  // Specify the directory where the uploaded files will be saved
  const uploadDir = path.join(process.cwd(), "/public/uploads");

  // Ensure the upload directory exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  form.uploadDir = uploadDir; // Set the upload directory
  form.keepExtensions = true; // Keep the file extension of the uploaded file

  form.parse(req, (err, fields, files: Files) => {
    if (err) {
      res.status(500).json({ error: "Failed to upload image." });
      return;
    }

    const file = files.image as formidable.File; // Ensure TypeScript knows this is a file object
    const oldPath = file.filepath;
    const newPath = path.join(uploadDir, file.originalFilename as string);

    // Move the uploaded file to the final destination
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        res.status(500).json({ error: "Failed to save image." });
        return;
      }

      // Return the file path or other relevant information to the client
      res
        .status(200)
        .json({
          message: "Image uploaded successfully!",
          filePath: `/uploads/${file.originalFilename}`,
        });
    });
  });
}
