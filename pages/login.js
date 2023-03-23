import * as cookie from 'cookie';

export function getServerSideProps(context) {
    const cookies = context.req.headers.cookie ?? '';
    const parsedCookies = cookie.parse(cookies);
    const spotifyAccessToken = parsedCookies.spotify_access_token;
    const spotifyRefreshToken = parsedCookies.spotify_refresh_token;

    if (spotifyAccessToken && spotifyRefreshToken) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        };
    }

    const spotifyClientID = process.env.SPOTIFY_CLIENT_ID;
    const spotifyRedirectURI = process.env.SPOTIFY_REDIRECT_URI;
    const spotifyAuthEndpoint = `https://accounts.spotify.com/authorize?client_id=${spotifyClientID}&redirect_uri=${spotifyRedirectURI}&response_type=code`;
    
    return {
        redirect: {
            destination: spotifyAuthEndpoint,
            permanent: false
        }
    };
}

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
        </div>
    );
};