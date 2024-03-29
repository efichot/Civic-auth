import * as civicSip from 'civic-sip-api';

var handle = (req, res) => {
    var jwtToken = req.body;

    // Step 4: Initialize instance passing your appId and secret.
    const civicClient = civicSip.newClient({ appId: 'HJ4qmqtgz',
    prvKey: "cb8ad58a68020421016942d8a261c7b4c83f9bfef288bb45b5c06f75c21bf4ed",
    appSecret: "9b169c65be197fde8069366f9fc36bf7" });
    // Step 5: Exchange authorization code for user data.

    civicClient.exchangeCode(jwtToken)
    .then(function(userData) {
    // store user data and userId as appropriate
    console.log("userData = " + JSON.stringify(userData));

    /*  example for response to a CIVIC_BASIC scope request:
    userData = {
    "data": [
    {
    "label": "contact.verificationLevel.CIVIC_0",
    "value": "contact.verificationLevel.CIVIC_0, true",
    "isValid": true,
    "isOwner": true
    },
    {
    "label": "contact.personal.email",
    "value": "user.test@gmail.com",
    "isValid": true,
    "isOwner": true
    },
    {
    "label": "contact.personal.phoneNumber",
    "value": "+1 555-618-7380",
    "isValid": true,
    "isOwner": true
    }
    ],
    "userId": "36a59d10-6c53-17f6-9185-gthyte22647a"
    }
    */
    }).catch(function(error) {

    });

}

