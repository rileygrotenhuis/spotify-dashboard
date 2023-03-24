import * as cookie from 'cookie';

export function getServerSideProps(context) {
    const cookies = context.req.headers.cookie ?? '';
    const parsedCookies = cookie.parse(cookies);
    const spotifyAccessToken = parsedCookies.spotify_access_token;

    if (spotifyAccessToken) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        };
    }

    return {
        props: {}
    };
}

export default function Login() {
    const spotifyClientID = process.env.SPOTIFY_CLIENT_ID;
    const spotifyRedirectURI = process.env.SPOTIFY_REDIRECT_URI;
    const spotifyAuthEndpoint = `https://accounts.spotify.com/authorize?client_id=${spotifyClientID}&redirect_uri=${spotifyRedirectURI}&response_type=code&scope=user-read-private%20user-library-read%20user-follow-modify%20user-top-read`;

    return (
        <div>
            <h1>Login</h1>
            <button>
                <a href={spotifyAuthEndpoint}>Login</a>
            </button>
        </div>
    );
};