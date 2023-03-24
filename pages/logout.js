import { getCookie } from '../util/cookies';
import { logout } from "../libs/spotify";

export async function getServerSideProps(context) {
    const spotifyAccessToken = getCookie(context, 'spotify_access_token');

    await logout(spotifyAccessToken);

    context.res.setHeader('set-cookie', [
        'spotify_access_token=; path=/;',
    ]);

    return {
        redirect: {
            destination: '/login',
            permanent: false,
        },
    };
}

export default function Logout() {
    return <></>;
};