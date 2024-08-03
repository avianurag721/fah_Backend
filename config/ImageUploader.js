const cloudinary = require('cloudinary').v2
require("dotenv").config()


exports.uploadImageToCloudinary  = async (file, folder, height, quality) => {
    const options = {folder};
   
    if(quality) {
        options.quality = quality;
    }
    options.resource_type = "auto";

    const imgdetails=await cloudinary.uploader.upload(file.tempFilePath, options);
    const transformedUrl = cloudinary.url(imgdetails.public_id, {
        
        format: 'jpg'
      });
      
      console.log(transformedUrl);
   
   
    return  transformedUrl
}