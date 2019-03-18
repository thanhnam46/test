const AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: 'AKIAJBWT3QBOGXPMGEVQ',
    secretAccessKey: '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',
    region: 'us-east-1'
  });

var requireText = require('require-text');
var content = requireText('./VayTieuDung_CitiBank.html', require);

const ses = new AWS.SES({ apiVersion: "2010-12-01" });
const params = {
  Destination: {
    ToAddresses: ["thanhnam97@gmail.com"] // Email address/addresses that you want to send your email
  },
  ConfigurationSetName: 'VayTieuDung',
  Message: {
    Body: {
      Html: {
        // HTML Format of the email
        Charset: "UTF-8",
        Data:content
      },
      // Text: {
      //   Charset: "UTF-8",
      //   Data: "Hello Nam Bia Sample description time 1517831318946"
      // }
    },
    Subject: {
      Charset: "UTF-8",
      Data: "Vay tiêu dùng từ ngân hàng, uy tín, đơn giản"
    }
  },
  Source: "admin@tiepthu.com"
};
console.log(params.Destination.ToAddresses);
// const sendEmail = ses.sendEmail(params).promise();
//
// sendEmail
//   .then(data => {
//     console.log("email submitted to SES", data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
