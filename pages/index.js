import * as cookie from 'cookie';
import ProfileDetails from "../components/ProfileDetails";
import TopArtists from "../components/TopArtists";
import TopSongs from "../components/TopSongs";
import AllPlaylists from "../components/AllPlaylists";

async function getMeData(spotifyAccessToken) {
  const res = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': `Bearer ${spotifyAccessToken}`
    }
  });

  const me = await res.json();

  return me;
};

async function getPlaylistData(spotifyAccessToken) {
  const res = await fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {
      'Authorization': `Bearer ${spotifyAccessToken}`
    }
  });

  const playlists = await res.json();

  return playlists;
};

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie ?? '';
  const parsedCookies = cookie.parse(cookies);
  const spotifyAccessToken = parsedCookies.spotify_access_token;
  const spotifyRefreshToken = parsedCookies.spotify_refresh_token;

  if (spotifyAccessToken && spotifyRefreshToken) {
    const me = await getMeData(spotifyAccessToken);
    const playlists = await getPlaylistData(spotifyAccessToken);

    return {
      props: {
        spotifyAccessToken,
        spotifyRefreshToken,
        me,
        playlists
      }
    };
  }

  const { code } = context.query;

  if (code) {
    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`)}`
      },
      body: `grant_type=authorization_code&code=${code}&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}`
    });

    const tokens = await res.json();
    
    context.res.setHeader('set-cookie', [
      `spotify_access_token=${tokens.access_token}; Path=/`,
      `spotify_refresh_token=${tokens.refresh_token}; Path=/`
    ]);

    const me = await getMeData(tokens.access_token);
    const playlists = await getPlaylistData(tokens.access_token);

    return {
      props: {
        spotifyAccessToken: tokens.access_token,
        spotifyRefreshToken: tokens.refresh_token,
        me,
        playlists
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
      <ProfileDetails 
        me={props.me}
        playlists={props.playlists}
      />
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