import styles from './TopArtists.module.css';
import Link from 'next/link';
import ArtistBlock from './ArtistBlock';

export default function TopArtists(props) {
    return (
        <div className={styles.TopArtistContainer}>
            <div className={styles.TopArtistTextContainer}>
                <h5 className={styles.TopArtistTitle}>
                    Your Top Artists of All Time
                </h5>
                <Link href="/artists">
                    <p className={styles.TopArtistSeeMore}>See More</p>
                </Link>
            </div>
            <div className={styles.TopArtistBlockContainer}>
                {props.topArtists.items.map((artist, index) => (
                    <ArtistBlock
                        key={index}
                        image_url={artist.images[2].url}
                        name={artist.name}
                    />
                ))}
            </div>
        </div>
    );
}
