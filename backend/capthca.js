import express from 'express';
import { post } from 'axios';
import { json } from 'body-parser';

const secretKey = process.env.CAPTCHA_SECRET_KEY || 'your_default_value_if_needed';

const app = express();
app.use(json());

app.post('/api/verify-recaptcha', async (req, res) => {
  const recaptchaResponse = req.body.recaptchaResponse;
  try {
    const verificationResult = await post('https://www.google.com/recaptcha/api/siteverify', {
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
