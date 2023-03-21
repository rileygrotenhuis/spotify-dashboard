export function getServerSideProps(context) {
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

export default function Artists() {
    return (
        <div>
            <h1>Artists</h1>
        </div>
    );
};