import styles from './TopArtists.module.css';
import ArtistBlock from "./ArtistBlock";

export default function TopArtists() {
    return (
        <div className={styles.TopArtistContainer}>
            <h5 className={styles.TopArtistTitle}>Top Artists of All Time</h5>
            <div className={styles.TopArtistBlockContainer}>
                <ArtistBlock />
                <ArtistBlock />
                <ArtistBlock />
                
            </div>
        </div>
    );
};