'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const mailin        = require('mailin-api-node-js');
const client = new Mailin("https://api.sendinblue.com/v2.0", 'gNnb960aVBPjQxJy');

exports.init = () => {

  return new Promise((resolve, reject)=>{

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());

    app.listen(3050, () => {

      console.log('All is well on port 3050');
      resolve();

    });

    app.post('/email', (req, res)=>{

      const emailData = req.body;

      let data = {
        to: {['tom.mozgan7@gmail.com']: 'tom.mozgan7@gmail.com'},
        from: ['no-reply@gostilna-strunjan.si', 'Gostilna Strunjan'],
        subject: 'Rezervacija',
        html: "<h1>Nova rezervacija</h1>" +
        "<p><b>Ime: "+emailData.name+"</b></p>" +
        "<p><b>Priimek: "+emailData.surname+"</b></p>" +
        "<p><b>Telefonska: "+emailData.phone+"</b></p>" +
        "<p><b>Sporocilo: "+emailData.message+"</b></p>"
      };

      client.send_email(data).on('complete', function (data) {
        res.send('Message sent');
      });

    });

  });

};

