import ProfileDetails from '../components/ProfileDetails';
import TopArtists from '../components/TopArtists';
import TopSongs from '../components/TopSongs';
import AllPlaylists from '../components/AllPlaylists';
import { getCookie } from '../util/cookies';
import {
    getSpotifyTokens,
    getMeData,
    getPlaylistData,
    getTopItems,
} from '../libs/spotify';
import Link from 'next/link';

export async function getServerSideProps(context) {
    const spotifyAccessToken = getCookie(context, 'spotify_access_token');

    if (spotifyAccessToken) {
        const me = await getMeData(spotifyAccessToken);

        if (me === 401) {
            context.res.setHeader('set-cookie', ['spotify_access_token=']);

            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            };
        }

        const playlists = await getPlaylistData(spotifyAccessToken);
        const topSongs = await getTopItems(spotifyAccessToken, 'tracks');
        const topArtists = await getTopItems(spotifyAccessToken, 'artists');

        return {
            props: {
                spotifyAccessToken,
                me,
                playlists,
                topArtists,
                topSongs,
            },
        };
    }

    const { code } = context.query;

    if (code) {
        const tokens = await getSpotifyTokens(code);

        const now = new Date();
        const expireTime = new Date(now.getTime() + 60 * 60 * 1000);

        context.res.setHeader('set-cookie', [
            `spotify_access_token=${
                tokens.access_token
            }; Expires=${expireTime.toUTCString()} Path=/`,
        ]);

        const me = await getMeData(tokens.access_token);
        const playlists = await getPlaylistData(tokens.access_token);
        const topSongs = await getTopItems(tokens.access_token, 'tracks');
        const topArtists = await getTopItems(tokens.access_token, 'artists');

        return {
            props: {
                spotifyAccessToken: tokens.access_token,
                me,
                playlists,
                topSongs,
                topArtists,
            },
        };
    }

    return {
        redirect: {
            destination: '/login',
            permanent: false,
        },
    };
}

export default function Home(props) {
    return (
        <div>
            {props.me ? (
                <ProfileDetails me={props.me} playlists={props.playlists} />
            ) : (
                <></>
            )}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '25px',
                }}
            >
                <button
                    style={{
                        fontSize: '1.5rem',
                        color: 'black',
                        background: 'white',
                        padding: '15px',
                        borderRadius: '25px',
                    }}
                >
                    <Link href="/logout">Logout</Link>
                </button>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '50px',
                    margin: '0 auto',
                    marginTop: '75px',
                    textAlign: 'center',
                }}
            >
                {props.topSongs ? (
                    <TopSongs topSongs={props.topSongs} />
                ) : (
                    <></>
                )}
                {props.topArtists ? (
                    <TopArtists topArtists={props.topArtists} />
                ) : (
                    <></>
                )}
                {props.playlists ? (
                    <AllPlaylists playlists={props.playlists} />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
