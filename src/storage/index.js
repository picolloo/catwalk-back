import AWS from 'aws-sdk';
import fs from 'fs';

const uploadFile = async ({ fileName, filePath, fileType }) => {
  return new Promise((resolve, reject) => {
    AWS.config.update({
      region: 'sa-east-1',
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });

    const s3 = new AWS.S3({
      apiVerion: '2012-10-17'
    });

    const stream = fs.createReadStream(filePath);
    stream.on('error', err => reject(err));

    s3.upload(
      {
        ACL: 'public-read',
        Bucket: 'catwalk-market',
        Body: stream,
        Key: fileName,
        ContentType: fileType
      },
      (err, data) => {
        if (err) reject(err);

        return resolve({ key: data.Key, url: data.Location });
      }
    );
  });
};

export default { uploadFile };
