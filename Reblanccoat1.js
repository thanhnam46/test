var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tdtm686@gmail.com',
    pass: 'thanhtri46]'
  }
});

var requireText = require('require-text');
var content = requireText('./Reblanccoat.html', require);
var mailOptions = {
  from: 'tdtm686@gmail.com',
  subject: 'Trẻ hóa, xóa mờ thâm nám',
  html: content
};

var LineByLineReader = require('line-by-line'),
lr = new LineByLineReader('Reblan1.txt');
wait =Math.floor(Math.random() * 10000) + 10000;
lr.on('line', function (line) {
  mailOptions.to = line;
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      console.log(mailOptions.to + ' pause: waiting 4000s for mail server...');
      wait = 4000000;
    } else {
      console.log('Email sent: '+ mailOptions.to);
      wait = Math.floor(Math.random() * 20000) + 20000;
      console.log('Wait for '+wait+' ms');
    }
  });
  lr.pause();
    setTimeout(function () {
        // ...and continue emitting lines.
        lr.resume();
    }, wait);
});
