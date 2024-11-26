import {v2 as cloudinary} from "cloudinary"

const connectCloudaniry = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDANIRY_NAME,
        api_key : process.env.CLOUDANIRY_API_KEY,
        api_secret: process.env.CLOUDANIRY_SECRET_KEY

    })
}

export default connectCloudaniry;