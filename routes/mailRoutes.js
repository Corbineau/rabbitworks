const express = require("express");
const router = express.Router();



// POST route from contact form
router.post('/contact', function (req, res) {
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });
    mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;',
      to: auth.user,
      subject: 'New message from yer site',
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
      if (error) {
        res.render('contact-failure');
      }
      else {
        res.render('contact-success');
      }
    });
  });

module.exports = router;