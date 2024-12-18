const url = `https://api.cloudinary.com/v1_1/${
  import.meta.env.VITE_CLOUD_NAME_CLOUDINARY
}/image/upload`;

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "othooy_eshop");

  const dataResponse = await fetch(url, {
    method: "post",
    body: formData,
  });
  return dataResponse.json();
};

export default uploadImage;

//https://console.cloudinary.com/pm/c-b368072678cf82dbe6c8eac79700a5/developer-dashboard
//https://console.cloudinary.com/pm/c-b368072678cf82dbe6c8eac79700a5/media-explorer
//https://console.cloudinary.com/settings/c-b368072678cf82dbe6c8eac79700a5/upload_presets/new
//https://console.cloudinary.com/pm/c-b368072678cf82dbe6c8eac79700a5/getting-started
//https://cloudinary.com/documentation/upload_images#landingpage
