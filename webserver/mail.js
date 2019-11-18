var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xxx@gmail.com',
    pass: 'xxpasswordxx'
  }
});

var mailOptions = {
  from: 'xxx@gmail.com',
  to: 'toxxx@gmail.com',
  subject: 'Node.js ile mail örneği',
  text: 'this is simple',
};
//maili başarılı bir şekilde gönderebilmek için gmail ayarlarından düşük güvenlikli uygulamalara izin vermeniz gerekmektedir.  https://www.google.com/settings/security/lesssecureapps   
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});