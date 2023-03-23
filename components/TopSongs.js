import styles from './TopSongs.module.css';
import Link from 'next/link';
import SongBlock from './SongBlock';

export default function TopSongs(props) {
    return (
        <div className={styles.TopSongContainer}>
            <div className={styles.TopSongTextContainer}>
                <h5 className={styles.TopSongTitle}>Top Songs of All Time</h5>
                <Link href='/songs'>
                    <p className={styles.TopSongSeeMore}>See More</p>
                </Link>
            </div>
            <div className={styles.TopSongBlockContainer}>
                {props.topSongs.items.map((item, index) => (
                    <SongBlock
                        key={index}
                        image_url={item.album.images[2].url}
                        name={item.name}
                        artist={item.artists[0].name}
                        album={item.album.name}
                    />
                ))}
            </div>
        </div>
    );
};