import styles from './TopSongs.module.css';
import SongBlock from './SongBlock';

export default function TopSongs(props) {
    return (
        <div className={styles.TopSongContainer}>
            <div className={styles.TopSongTextContainer}>
                <h5 className={styles.TopSongTitle}>
                    Your Top Songs of All Time
                </h5>
            </div>
            <div className={styles.TopSongBlockContainer}>
                {props.topSongs.items.map((item, index) => (
                    <SongBlock
                        key={index}
                        image_url={item.album.images[2].url}
                        name={item.name}
                        artist={item.artists[0].name}
                        album={item.album.name}
                        url={item.external_urls.spotify}
                    />
                ))}
            </div>
        </div>
    );
}
