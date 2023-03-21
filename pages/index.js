import ProfileDetails from "../components/ProfileDetails";
import TopArtists from "../components/TopArtists";
import TopSongs from "../components/TopSongs";

export default function Home() {
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
        }} 
      >
        <TopArtists />
        <TopSongs />
      </div>
    </div>
  );
};