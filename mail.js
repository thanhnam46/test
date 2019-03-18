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

var maillist = require('./txtToArray');
console.log(maillist);
// var mailOptions = {
//   from: 'ssachhay@gmail.com',
//   subject: '[Sách hay]Tuổi trẻ đáng giá bao nhiêu?',
//   html: content
// };

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
// console.log(require('./txtToArray'));
