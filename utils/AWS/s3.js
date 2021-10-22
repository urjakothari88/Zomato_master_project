import AWS from "aws-sdk";


//AWS S3 bucket config
const s3bucket = new AWS.S3({
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.ev.AWS_SECRET_ACCESS_KEY,
    region: "ap-south-1",
});

export const s3Upload = (options) => {
    return new Promise((resolve, reject) => {
        s3bucket.upload(options, (error,data) => {
        if(error) return reject(error);
        return resolve(data);
    })
   });
};
