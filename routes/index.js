var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var request = require("request");
var sgTransport = require('nodemailer-sendgrid-transport');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Debasis Nath || Fullstack Webdeveloper' });
});

router.post('/contact', function(req, res) {
  const captcha = req.body["g-recaptcha-response"];
  if (!captcha) {
    console.log(req.body);
    return res.redirect("back");
  }
  // secret key
  var secretKey = process.env.SECRET_KEY;
  // Verify URL
  var verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}&remoteip=${req
      .connection.remoteAddress}`;
  // Make request to Verify URL
  request.get(verifyURL, (err, response, body) => {
    if (err) return err;
    // if not successful
    if (body.success !== undefined && !body.success) {
      return res.redirect("/");
    }


    let options = {
      auth: {
        api_user: "devofficial",
        api_key: "imdev1996"
      }
    }
    let mailOptions = {
      from: req.body.email, // sender address
      to: 'debasisnath84@gmail.com', // list of receivers
      subject:req.body.name, // Subject line
      text: req.sanitize(req.body.message), // plain text body
      html: '<h3>You have received an email from...</h3><ul><li>Name: ' + req.body.name + ' </li><li>Email: ' + req.body.email + ' </li></ul><p>Message: <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + req.body.message + ' </p>' // html body
      // html body
    };
    let client = nodemailer.createTransport(sgTransport(options));

    client.sendMail(mailOptions, function(err, info) {
      if (err) {
        console.log(err);
      }
      else {
        console.log('Message sent: ');
      }
    });
    
  });
  res.redirect("/");

});


module.exports = router;
