import AWS from "aws-sdk";


//AWS S3 bucket config
const s3bucket = new AWS.S3({
    accessKeyId:  "AKIAQ6EDODJRQGYSM2XV",
    secretAccessKey:"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",
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