import styles from './PlaylistBlock.module.css';
import Image from "next/image";

export default function PlaylistBlock(props) {
    return (
        <div className={styles.PlaylistBlockContainer}>
            <Image
                src={props.image_url}
                alt="Artist Image"
                width={50}
                height={50}
                className={styles.PlaylistBlockImage}
            />
            <div className={styles.PlaylistBlockNameContainer}>
                <p className={styles.PlaylistBlockName}>{props.name}</p>
                <p className={styles.PlaylistBlockName}>{props.total_tracks} Tracks</p>
            </div>
        </div>
    );
};