import * as cookie from 'cookie';

export function getServerSideProps(context) {
    const cookies = context.req.headers.cookie ?? '';
    const parsedCookies = cookie.parse(cookies);
    const spotifyAccessToken = parsedCookies.spotify_access_token;
    const spotifyRefreshToken = parsedCookies.spotify_refresh_token;
  
    if (!spotifyAccessToken || !spotifyRefreshToken) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    }
  
    return {
      props: {
        spotifyAccessToken,
        spotifyRefreshToken
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