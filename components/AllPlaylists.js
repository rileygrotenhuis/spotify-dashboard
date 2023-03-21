import styles from './AllPlaylists.module.css';
import PlaylistBlock from "./PlaylistBlock";

export default function AllPlaylists() {
    return (
        <div className={styles.AllPlaylistsContainer}>
            <h5 className={styles.AllPlaylistsTitle}>Your Playlists</h5>
            <div className={styles.AllPlaylistsBlockContainer}>
                <PlaylistBlock />
                <PlaylistBlock />
                <PlaylistBlock />
            </div>
        </div>
    );
};