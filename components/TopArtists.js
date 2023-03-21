import styles from './TopArtists.module.css';
import Link from 'next/link';
import ArtistBlock from "./ArtistBlock";

export default function TopArtists() {
    return (
        <div className={styles.TopArtistContainer}>
            <div className={styles.TopArtistTextContainer}>
                <h5 className={styles.TopArtistTitle}>Top Artists of All Time</h5>
                <Link href='/artists'>
                    <p className={styles.TopArtistSeeMore}>See More</p>
                </Link>
            </div>
            <div className={styles.TopArtistBlockContainer}>
                <ArtistBlock />
                <ArtistBlock />
                <ArtistBlock />
            </div>
        </div>
    );
};