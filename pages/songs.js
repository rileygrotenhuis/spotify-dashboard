import { getCookie } from '../util/cookies';

export function getServerSideProps(context) {
    const spotifyAccessToken = getCookie(context, 'spotify_access_token');

    if (!spotifyAccessToken) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    return {
        props: {
            spotifyAccessToken,
        },
    };
}

export default function Songs() {
    return (
        <div>
            <h1>Songs</h1>
        </div>
    );
}
