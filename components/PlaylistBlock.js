import styles from './PlaylistBlock.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function PlaylistBlock(props) {
    return (
        <div className={styles.PlaylistBlockContainer}>
            <Link href={props.url}>
                <Image
                    src={props.image_url}
                    alt="Artist Image"
                    width={50}
                    height={50}
                    className={styles.PlaylistBlockImage}
                />
            </Link>
            <div className={styles.PlaylistBlockNameContainer}>
                <p className={styles.PlaylistBlockName}>{props.name}</p>
                <p className={styles.PlaylistBlockName}>
                    {props.total_tracks} Tracks
                </p>
            </div>
        </div>
    );
}
