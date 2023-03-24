import styles from './AllPlaylists.module.css';
import PlaylistBlock from './PlaylistBlock';

export default function AllPlaylists(props) {
    return (
        <div className={styles.AllPlaylistsContainer}>
            <h5 className={styles.AllPlaylistsTitle}>Your Playlists</h5>
            <div className={styles.AllPlaylistsBlockContainer}>
                {props.playlists.items.map((playlist, index) => (
                    <PlaylistBlock
                        key={index}
                        image_url={playlist.images[2].url}
                        name={playlist.name}
                        total_tracks={playlist.tracks.total}
                        url={playlist.external_urls.spotify}
                    />
                ))}
            </div>
        </div>
    );
}
