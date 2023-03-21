import cookie from 'cookie';
import ProfileDetails from "../components/ProfileDetails";
import TopArtists from "../components/TopArtists";
import TopSongs from "../components/TopSongs";
import AllPlaylists from "../components/AllPlaylists";

export function getServerSideProps(context) {
  const { code } = context.query;

  if (code) {
    context.res.setHeader('Set-Cookie', `spotify_access_token=${code}`);

    return {
      props: {
        spotifyAccessToken: code
      }
    };
  }

  const { req } = context;
  const spotifyAccessToken = req.cookies.spotify_access_token ?? null;

  if (!spotifyAccessToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }

  return {
    props: {
      spotifyAccessToken
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