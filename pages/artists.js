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

export default function Artists() {
    return (
        <div>
            <h1>Artists</h1>
        </div>
    );
}
