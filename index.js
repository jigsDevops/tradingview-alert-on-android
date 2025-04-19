const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const port = 3000;

    app.use(bodyParser.json());

    app.post('/tradingview', (req, res) => {
      console.log('TradingView alert received:', req.body);
      // In a real application, you would send this data to IFTTT or Zapier
      // or use a service like Firebase Cloud Messaging (FCM) to send a push notification directly to your phone.
      res.status(200).send('Alert received');
    });

    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
