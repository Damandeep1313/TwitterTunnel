import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

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
