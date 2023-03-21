export function getServerSideProps(context) {
    const { req } = context;
    const spotifyAccessToken = req.cookies.spotify_access_token ?? null;

    if (spotifyAccessToken) {
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