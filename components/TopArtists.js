import styles from './TopArtists.module.css';
import ArtistBlock from './ArtistBlock';

export default function TopArtists(props) {
    return (
        <div className={styles.TopArtistContainer}>
            <div className={styles.TopArtistTextContainer}>
                <h5 className={styles.TopArtistTitle}>
                    Your Top Artists of All Time
                </h5>
            </div>
            <div className={styles.TopArtistBlockContainer}>
                {props.topArtists.items.map((artist, index) => (
                    <ArtistBlock
                        key={index}
                        image_url={artist.images[2].url}
                        name={artist.name}
                        url={artist.external_urls.spotify}
                    />
                ))}
            </div>
        </div>
    );
}
