import cloudinary from "@/lib/cloudinary";
import { UploadApiResponse } from "cloudinary";

export async function UploadImageCloudinary(file: Buffer | any) {
  try {
    if (!file || (!file.data && !file.length)) {
      return { error: true, message: "No file provided or file is empty" };
    }
    const upload: UploadApiResponse | undefined = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ upload_preset: "clothes", quality: "auto:best" }, (error, result) => {
          if (error) reject(error);
          return resolve(result);
        })
        .end(file?.data ? file.data : file);
    });

    if (!upload) return { error: true, message: "Gagal Upload!" };

    const data = {
      format: upload.format,
      url: upload.url,
    };

    return { error: false, message: "Upload sukses", data };
  } catch (error) {
    console.log(error);
    throw new Error((error as Error).message);
  }
}

export const ValidateFileSize = (file: File) => {
  const fileSizeInMB = file.size / (1024 * 1024);
  return fileSizeInMB;
};
