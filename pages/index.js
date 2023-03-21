import cookie from 'cookie';
import ProfileDetails from "../components/ProfileDetails";
import TopArtists from "../components/TopArtists";
import TopSongs from "../components/TopSongs";
import AllPlaylists from "../components/AllPlaylists";

export function getServerSideProps(context) {
  const cookies = cookie.parse(context.req.headers.cookie);
  const spotifyAccessToken = cookies.spotify_access_token ?? null;

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