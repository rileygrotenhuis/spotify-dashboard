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

export default function Songs() {
    return (
        <div>
            <h1>Songs</h1>
        </div>
    );
};