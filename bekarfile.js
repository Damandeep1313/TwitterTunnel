const express = require('express');
const axios = require('axios'); // Import axios instead of node-fetch
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;
app.use(express.json());
const CLIENT_ID = process.env.CONSUMER_KEY; // Your Twitter API Client ID
const CLIENT_SECRET = process.env.CONSUMER_SECRET;
const TOKEN_URL = 'https://api.twitter.com/2/oauth2/token';

// This route will now be accessible by all users
app.get('/callback', async (req, res) => {
    const authorizationCode = req.query.code;

    if (!authorizationCode) {
        res.status(400).send('Authorization code not provided.');
        return;
    }

    try {
        const tokenResponse = await getAccessToken(authorizationCode, codeVerifier); // Make sure codeVerifier is accessible
        res.json({ message: 'Access token received!', token: tokenResponse.access_token });
    } catch (error) {
        res.status(500).send('Error retrieving access token.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running at https://yourapp.herokuapp.com`); // Replace with your deployment URL
});
