import styles from './TopSongs.module.css';
import SongBlock from './SongBlock';

export default function TopSongs() {
    return (
        <div className={styles.TopSongContainer}>
            <h5 className={styles.TopSongTitle}>Top Tracks of All Time</h5>
            <div className={styles.TopSongBlockContainer}>
                <SongBlock />
                <SongBlock />
                <SongBlock />
            </div>
        </div>
    );
};