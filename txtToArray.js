var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ssachhay@gmail.com',
    pass: 'thanhtri46]'
  }
});

var requireText = require('require-text');
var content = requireText('./content.html', require);

var fs = require('fs');
fs.readFile('file.txt', function(err, data) {
    if(err) throw err;
    var maillist = data.toString().split("\r\n");
    // for(i in array) {
    //     console.log(array[i]);
    // }
    console.log(maillist);
    maillist.forEach(function (to, i , array) {
      var mailOptions = {
        from: 'ssachhay@gmail.com',
        subject: '[Sách hay]Tuổi trẻ đáng giá bao nhiêu?',
        html: content
      };
      mailOptions.to = to;
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: '+ mailOptions.to + i);

        }
      });
    })
});
