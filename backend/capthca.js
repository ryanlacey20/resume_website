const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const secretKey = process.env.CAPTCHA_SECRET_KEY;

const app = express();
app.use(bodyParser.json());

app.post('/api/verify-recaptcha', async (req, res) => {
  const recaptchaResponse = req.body.recaptchaResponse;

  try {
    const verificationResult = await axios.post('https://www.google.com/recaptcha/api/siteverify', {
      secret: secretKey,
      response: recaptchaResponse,
    });

    if (verificationResult.data.success) {
      // verified, serve the page the content
      res.json({
        success: true,
        contactDetails: {
          email: 'ryanpatricklacey@gmail.com',
          linkedin: 'https://www.linkedin.com/in/ryanpatricklacey/',
          github: 'https://github.com/ryanlacey20',
        },
      });
    } else {
      // verification has failed
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
