import * as cookie from 'cookie';
import ProfileDetails from "../components/ProfileDetails";
import TopArtists from "../components/TopArtists";
import TopSongs from "../components/TopSongs";
import AllPlaylists from "../components/AllPlaylists";

export function getServerSideProps(context) {
  const cookies = context.req.headers.cookie ?? '';
  const parsedCookies = cookie.parse(cookies);
  const spotifyAccessToken = parsedCookies.spotify_access_token;
  const spotifyRefreshToken = parsedCookies.spotify_refresh_token;

  console.log(spotifyAccessToken);
  console.log(spotifyRefreshToken);

  if (spotifyAccessToken && spotifyRefreshToken) {
    return {
      props: {
        spotifyAccessToken,
        spotifyRefreshToken
      }
    };
  }

  const { code } = context.query;

  if (code) {
    /**
     * TODO:
     * WE need to use this code to get a new
     * refresh and access token
     */
    context.res.setHeader('set-cookie', [
      `spotify_access_token=${code}; Path=/`,
      `spotify_refresh_token=${code}; Path=/`
    ]);

    return {
      props: {
        spotifyAccessToken: code,
        spotifyRefreshToken: code
      }
    };
  }

  return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  };
};

export default function Home(props) {
  return (
    <div>
      <ProfileDetails />
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
        <TopSongs />
        <TopArtists />
        <AllPlaylists />
      </div>
    </div>
  );
};