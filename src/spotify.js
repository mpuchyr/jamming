let accessToken;
const clientID = 'bead0cc0fba94ca883c226265f3dfc95';
const redirectUri = 'http://localhost:3000/';

const Spotify = {
    getAccessToken() {
        // first check for access token
        if (accessToken) {
            return accessToken;
        }
        // extract token from url
        const tokenURL = window.location.href.match(/access_token=([^&*])/);

        // extract expiry time from url
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        // second check for access token
        if (tokenURL && expiryTime) {
            // setting access token and expiry time variables
            accessToken = tokenURL;
            const expiresIn = Number(expiryTime[1]);

            // setting the function which will reset the access token when it expires
            window.setTimeout(() => (accessToken=""), expiresIn * 1000);

            // clearing the url after the access token expires
            window.history.pushState('Access token', null, '/');
            return accessToken;
        }

        // third check for access token
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        window.location = redirect;
    }
}

export default Spotify;