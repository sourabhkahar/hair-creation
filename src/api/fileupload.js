import axios from "axios";
async function uploadArtistsImage(file, onProgress = null) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  );
  formData.append("folder", "artists");

  const response = await axios.post(
    `${import.meta.env.VITE_CLOUDINARY_IMAGE_URL}/image/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgress(percent);
        }
      }
    }
  );

  return response.data.secure_url;
}

export{
    uploadArtistsImage
}