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

  if (res.ok) {
    const me = await res.json();

    return me;
  }

  if (res.status === 401) {
    return 401;
  }

  return null;
};

async function getPlaylistData(spotifyAccessToken) {
  const res = await fetch('https://api.spotify.com/v1/me/playlists?limit=5', {
    headers: {
      'Authorization': `Bearer ${spotifyAccessToken}`
    }
  });

  if (res.ok) {
    const playlists = await res.json();

    return playlists;
  }

  return null;
};

async function getTopItems(spotifyAccessToken, item) {
  const res = await fetch(`https://api.spotify.com/v1/me/top/${item}?limit=5&time_range=long_term`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${spotifyAccessToken}`,
    },
  });

  if (res.ok) {
    const top = await res.json();

    return top;
  }

  return null;
}

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie ?? '';
  const parsedCookies = cookie.parse(cookies);
  const spotifyAccessToken = parsedCookies.spotify_access_token;

  if (spotifyAccessToken) {
    const me = await getMeData(spotifyAccessToken);
    
    if (me === 401) {
      context.res.setHeader('set-cookie', [
        'spotify_access_token=',
      ]);

      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
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
        topSongs
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

    const now = new Date();
    const expireTime = new Date(now.getTime() + 60 * 60 * 1000);
    
    context.res.setHeader('set-cookie', [
      `spotify_access_token=${tokens.access_token}; Expires=${expireTime.toUTCString()} Path=/`,
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
        topArtists
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
      {props.me ? <ProfileDetails me={props.me} playlists={props.playlists}/> : <></>}
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
        {props.topSongs ? <TopSongs topSongs={props.topSongs} /> : <></>}
        {props.topArtists ? <TopArtists topArtists={props.topArtists} /> : <></>}
        {props.playlists ? <AllPlaylists playlists={props.playlists} /> : <></>}
      </div>
    </div>
  );
};